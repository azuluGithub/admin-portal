import React, { useState } from "react";
import { db } from "../firebase";
import { ref, push } from "firebase/database";

export default function NewMemberForm({ onCreated }) {
  const [form, setForm] = useState({ firstName: "", lastName: "", address: "", phone: ""});
  const [saving, setSaving] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const membersRef = ref(db, "members");
    const newRef = push(membersRef);
    await newRef.set({ ...form, createdAt: Date.now() });
    setSaving(false);
    setForm({ firstName: "", lastName: "", address: "", phone: ""});
    if (onCreated) onCreated();
  }

  return (
    <form onSubmit={handleSubmit} style={{display:'grid', gap:8}}>
      <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First name" required />
      <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last name" required />
      <input name="address" value={form.address} onChange={handleChange} placeholder="Address" />
      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" />
      <button type="submit" disabled={saving}>{saving ? "Saving..." : "Add member"}</button>
    </form>
  );
}
