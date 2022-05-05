import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./MiniSideCalendar";
import Labels from "./Labels";
export default function Sidebar() {
  return (
    <aside className="border p-5 w-64">
      <CreateEventButton />
      <SmallCalendar />
      <Labels />
    </aside>
  );
}
