import CreateForm from "./CreateForm";

export default async function CreateTicket() {
  return (
    <main>
      <h2 className="text-yellow-500 text-center">Add a New Ticket</h2>
      <CreateForm />
    </main>
  )
}
