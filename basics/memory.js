let user={
    email: "abc@gmail.com",
    id: "xyz"     //object i.e a non primitive  datatype hence will go in heap
};
let user2=user
user.email="cde@gmail.com"
console.log(user);
console.log(user2);
//heap and stack 
//stack memory is for primitive datatype and heap is for non primitive datatype,
//in stack changes are made in copy of a variable hence the changes do not modify original values 
//in heaap changes are made in original variables as shown above code
