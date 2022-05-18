// function fetchItems(): string[] {
//   let items = ["a", "b", "c"];
//   return items;
// }
// fetchItems();

function fetchItems(): Promise<string[]> {
  let items = ["a", "b", "c"];
  return new Promise(function (resolve) {
    resolve(items);
  });
}
fetchItems();
