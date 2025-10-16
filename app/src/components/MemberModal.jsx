import React from "react";
import { recordCollectionForMember } from "./CollectionManager";

export default function MemberModal({ member, onClose, onMarked }) {
  if (!member) return null;

  const handleMarkToday = async () => {
    await recordCollectionForMember(member);
    if (onMarked) onMarked();
  };

  return (
    <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.4)'}}>
      <div style={{maxWidth:480, margin:'10% auto', background:'#fff', padding:16, borderRadius:8}}>
        <h3>{member.firstName} {member.lastName}</h3>
        <p>Phone: {member.phone || '-'}</p>
        <p>Address: {member.address || '-'}</p>
        <div style={{display:'flex', gap:8, marginTop:12}}>
          <button onClick={handleMarkToday}>Mark Collected (Today)</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
