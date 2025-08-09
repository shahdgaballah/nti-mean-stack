var items = [];
items[0]="item1";
items[1]="item2";
items[2]="item3";

function addItem(item){
    items.push(item);
};
addItem("item4");

function readItems(){
    items.forEach(item => {
        console.log(item);
});
}
readItems();

function modifyItem(index, item){
    items[index]=item;
}
modifyItem(0, "item5");
readItems();

function deleteItem(index, deleteCount){
    items.splice(index,deleteCount);
}
deleteItem(0,1);
readItems();