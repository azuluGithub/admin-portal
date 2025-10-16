import React from "react";
import { db } from "../firebase";
import { ref, set } from "firebase/database";

function formatDate(d = new Date()) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export async function recordCollectionForMember(member, date = null) {
  const dateKey = date ? formatDate(new Date(date)) : formatDate();
  const collectionRef = ref(db, `collections/${dateKey}/${member.id}`);
  await set(collectionRef, {
    firstName: member.firstName,
    lastName: member.lastName,
    phone: member.phone || "",
    address: member.address || "",
    collectedAt: Date.now(),
  });
}

export default function CollectionManager() {
  return null;
}
