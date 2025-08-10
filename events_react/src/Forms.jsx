function handleFormEvent(event) {
  event.preventDefault();
  console.log("Form was submitted!");
}

export default function Forms() {
  return (
    <form onSubmit={handleFormEvent}>
      <input placeholder="Enter something" type="text" />
      <button>Submit</button>
    </form>
  );
}
