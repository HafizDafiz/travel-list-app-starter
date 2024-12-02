export default function Stats({ items }) {
    const totalItems = items.length;
    const packedItems = items.filter((item) => item.packed).length;
    const percentagePacked = totalItems
      ? Math.round((packedItems / totalItems) * 100)
      : 0;
  
    return (
      <footer className="stats">
        {
          percentagePacked === 100?
          <strong>Great work! Everything is packed!</strong>
          :`You have ${totalItems} items in the list. You already packed ${packedItems} (
          ${percentagePacked}%). `
        }
      </footer>
    );
  }