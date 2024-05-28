module.exports = (app)=>{
    app.get('*', (req, res) => {
        res.json({status:false,message:'Hello, you are welcome to arx api'});
     });
     app.post('*', (req, res) => {
       res.json({status:false,message:'Hello, you are welcome to arx api'});
     });
}