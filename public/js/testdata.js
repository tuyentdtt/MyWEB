var MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://AdminATN:123456ATN@cluster0-bqt2b.mongodb.net/ATN-Shop?retryWrites=true&w=majority";


ObjectId = require('mongodb').ObjectID;


/// ***************** ***************** *****************
/// ***************** Database & Bảng dữ liệu cần Truy vấn


const NameDataBase = "ATN-Shop";

function InsertForPayment()
{
    MongoClient.connect(uri, { useUnifiedTopology: true })
    .then (client => {
      var dbo = client.db(NameDataBase);
      var mydata = {
        Product_id:'P002, P003',
        User_id:"5ef85267e23742be814567ad",
        Price_all:8000,
        Date:'27/7/2020',
      };
      dbo.collection("Bill").insertOne(mydata)
        .then (result => {
            console.log(result);
            client.close();
        })
        .catch(error => console.error(error));
    })
    .catch(error => console.error(error));
}