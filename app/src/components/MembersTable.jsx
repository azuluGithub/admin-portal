import React, { useEffect, useMemo, useState } from "react";
import { db } from "../firebase";
import { ref, onValue, remove } from "firebase/database";

export default function MembersTable({ onViewMember }) {
  const [members, setMembers] = useState({});
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState("lastName");
  const [sortDir, setSortDir] = useState("asc");
  const [page, setPage] = useState(0);
  const pageSize = 10;

  useEffect(() => {
    const r = ref(db, "members");
    const unsub = onValue(r, snapshot => {
      const val = snapshot.val() || {};
      setMembers(val);
    });
    return () => unsub();
  }, []);

  const membersArray = useMemo(() => Object.entries(members).map(([id, data])=>({ id, ...data })), [members]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return membersArray.filter(m =>
      (m.firstName + " " + m.lastName + " " + (m.phone||"") + " " + (m.address||"")).toLowerCase().includes(q)
    );
  }, [membersArray, query]);

  const sorted = useMemo(() => {
    return filtered.sort((a,b) => {
      const A = (a[sortKey] || "").toString().toLowerCase();
      const B = (b[sortKey] || "").toString().toLowerCase();
      if (A < B) return sortDir === "asc" ? -1 : 1;
      if (A > B) return sortDir === "asc" ? 1 : -1;
      return 0;
    });
  }, [filtered, sortKey, sortDir]);

  const paginated = sorted.slice(page*pageSize, (page+1)*pageSize);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this member?")) return;
    await remove(ref(db, `members/${id}`));
  }

  return (
    <div>
      <input placeholder="Search" value={query} onChange={e=>{setQuery(e.target.value); setPage(0)}} />
      <table>
        <thead>
          <tr>
            <th onClick={()=>{ setSortKey("firstName"); setSortDir(sortDir==="asc"?"desc":"asc"); }}>Name</th>
            <th onClick={()=>{ setSortKey("address"); setSortDir(sortDir==="asc"?"desc":"asc"); }}>Address</th>
            <th onClick={()=>{ setSortKey("phone"); setSortDir(sortDir==="asc"?"desc":"asc"); }}>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map(m => (
            <tr key={m.id}>
              <td>{m.firstName} {m.lastName}</td>
              <td>{m.address}</td>
              <td>{m.phone}</td>
              <td>
                <button onClick={()=> onViewMember(m)}>View</button>
                <button onClick={()=> handleDelete(m.id)}>Delete</button>
              </td>
            </tr>
          ))}
          {paginated.length === 0 && <tr><td colSpan="4">No results</td></tr>}
        </tbody>
      </table>

      <div style={{marginTop:10}}>
        <button onClick={()=> setPage(p => Math.max(0, p-1))} disabled={page===0}>Prev</button>
        <span> Page {page+1} </span>
        <button onClick={()=> setPage(p => p+1)} disabled={(page+1)*pageSize >= sorted.length}>Next</button>
      </div>
    </div>
  );
}
