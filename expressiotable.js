app.post('/apply', function(req, res){
    res.write('<tr><th>First Name</th><th>Last Name</th> <th> Gender</th> <th>Address</th></tr>');
    res.write('<tr>');
    res.write('<td>' + req.body.first_name + '</td>');
    res.write('<td>' + req.body.last_name+'</td>');
    res.write('<td>' + req.body.gender + '</td>');
    res.write('<td' + req.body.addr+ '</td>')

    res.write('</tr>');
    res.write('</table>');
    res.end();
})
app.listen(2000,function(err){
    if(err)console.log(err);
console.log("server started")
})