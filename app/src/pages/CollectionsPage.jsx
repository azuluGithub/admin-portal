import React, { useEffect, useMemo, useRef, useState } from "react";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
import PrintListButton from "../components/PrintListButton";

function formatDate(d = new Date()) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export default function CollectionsPage() {
  const [date, setDate] = useState(formatDate());
  const [list, setList] = useState({});
  const containerRef = useRef(null);

  useEffect(() => {
    const r = ref(db, `collections/${date}`);
    const unsub = onValue(r, (snap) => {
      setList(snap.val() || {});
    });
    return () => unsub();
  }, [date]);

  const items = useMemo(() => Object.entries(list).map(([id, data]) => ({ id, ...data })), [list]);
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const s = q.toLowerCase();
    return items.filter((i) => (
      `${i.firstName} ${i.lastName} ${i.phone} ${i.address}`.toLowerCase().includes(s)
    ));
  }, [items, q]);

  return (
    <div style={{padding:16}}>
      <h2>Collections</h2>
      <div style={{display:'flex', gap:8, alignItems:'center'}}>
        <input type="date" value={date} onChange={(e)=> setDate(e.target.value)} />
        <input placeholder="Search" value={q} onChange={(e)=> setQ(e.target.value)} />
        <PrintListButton targetRef={containerRef} filename={`${date}-collection.pdf`} />
      </div>
      <div ref={containerRef} style={{marginTop:16}}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Collected At</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((i) => (
              <tr key={i.id}>
                <td>{i.firstName} {i.lastName}</td>
                <td>{i.phone}</td>
                <td>{i.address}</td>
                <td>{new Date(i.collectedAt).toLocaleString()}</td>
              </tr>
            ))}
            {filtered.length === 0 && <tr><td colSpan="4">No records</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
