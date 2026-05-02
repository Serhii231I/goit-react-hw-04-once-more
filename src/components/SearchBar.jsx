export default function SearchBar({ onSearch }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;
    if (topic.toLowerCase() === "") {
      alert("Please make a query!");
      return;
    }
    onSearch(topic);

    form.reset();
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" name="topic" />
      <button type="submit">Search</button>
    </form>
  );
}
