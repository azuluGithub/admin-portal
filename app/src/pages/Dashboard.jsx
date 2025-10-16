import React, { useRef, useState } from "react";
import NewMemberForm from "../components/NewMemberForm";
import MembersTable from "../components/MembersTable";
import MemberModal from "../components/MemberModal";

export default function Dashboard() {
  const [selected, setSelected] = useState(null);
  const tableRef = useRef(null);

  return (
    <div style={{padding:16}}>
      <h2>Dashboard</h2>
      <div style={{display:'grid', gridTemplateColumns:'2fr 1fr', gap:16}}>
        <div ref={tableRef}>
          <MembersTable onViewMember={(m)=> setSelected(m)} />
        </div>
        <div>
          <h3>New Member</h3>
          <NewMemberForm onCreated={()=>{}} />
        </div>
      </div>
      <MemberModal member={selected} onClose={()=>setSelected(null)} onMarked={()=>{}} />
    </div>
  );
}
