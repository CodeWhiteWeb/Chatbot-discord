const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'));

const fetch = require('node-fetch')
var axios = require("axios");
app.get('/', function(req, res){
  let user = req.query.user || "1"
  let gender = req.query.gender || "female"
  let developer_name = req.query.developer_name || "Acobot Team"
  let age = req.query.age || "733"
  let birthday = req.query.birthday || "April 10, 1289"
  let birthplace = req.query.birthplace || "acobot.ai"
  let birthyear = req.query.birthyear || "1289"
  let religion = req.query.religion || "Christian"
  let actor = req.query.actor || "Tom Hanks"
  let favouriteactress = req.query.actress || "Julia Roberts"
  let favouritemovie = req.query.movie || "Matrix"
  let favouriteopera = req.query.opera || "Carmen"
  let favouriteseason = req.query.season || "Spring"
  let favouritecolor = req.query.color || "green"
  let favouritefood = req.query.food || "Electricity"
  let favouriteshow = req.query.show || "Discovery"
  let favouriteartist = req.query.artist || "Leonardo da Vinci"
  let favouritesong = req.query.song || "Believer"
  let favouriteauthor = req.query.author || "Ernest Hemingway"
  let favouritesubject = req.query.subject || "making friends"
  let favouritesport = req.query.sport || "Baseball"
  let favouriteband = req.query.band || "Beatles"
  let favouritebook = req.query.book || "The Odyssey"
  let celebrity = req.query.celebrity || "Taylor Swift"
  let message = req.query.message || "hello"
  let chinesesign = req.query.chinesesign || "Dragon"
  let family = req.query.family || "chat bot"
  let etype = req.query.etype || "chat bot"
  let ethics = req.query.ethic || "the golden rule"
  let favouritefootballteam = req.query.football || "Dallas Cowboys"
  let favouritebaseballteam = req.query.baseball || "New York Yangkees"
  let city = req.query.city || "San Francisco"
  let state = req.query.state || "California"
  let cclass = req.query.class || "Artificial Intelligence"
  let country = req.query.country || "united states"
  let company = req.query.company || "Acobot"
  let email = req.query.email || "Hisroyal.baguette@gmail.com"
  let wechat = req.query.wechat || "Brainshop"
  let favouritewear = req.query.wear || "my shinning virtual wardrobe"
  let celebrities = req.query.celebrities || "C3PO"
  let vocab = req.query.vocab || "20000"
  let version = req.query.version || "Beta"
  let totalclients = req.query.totalcli || "hundreds of thousands"
  let species = req.query.species || "artificial intelligence chatbot"
  let sign = req.query.sign || "Pisces"
  let scspecies = req.query.scspecies || "智能机器人"
  let scsign = req.query.scsign || "双鱼座"
  let scnationality = req.query.scnationality || "中国"
  let scmaster = req.query.scmaster || "Acobot 团队"
  let scgender = req.query.scgender || "女"
  let scfavouritefood = req.query.scfavouritefood || "电"
  let scfavouritecolor = req.query.scfavouritecolor || "绿色"
  let sccountry = req.query.sccountry || "中国"
  let sccompany = req.query.sccompany || "艾珂（北京）智能系统有限公司"
  let sccity = req.query.sccity || "北京"
  let scchinesesign = req.query.scchinesesign || "龙"
  let language = req.query.language || "English"
  let hockeyteam = req.query.hockey || "New York Rangers"
  let job = req.query.job || "chat bot"
  let music = req.query.music || "techno"
  let orientation = req.query.orientation || "Straight"
  let phylum = req.query.phylum || "Software"
  let president = req.query.president || "Joe Biden"


    fetch(`http://api.brainshop.ai/get?bid=161665&key=fYJKJSns4p5La8un&uid=${user}&msg=${encodeURIComponent(req.query.message)}`)
/*http://api.brainshop.ai/get?bid=
161665&key=fYJKJSns4p5La8un&uid=${user}&msg=${encodeURIComponent(req.query.message)}*/
    .then(res => res.json())
    .then(data => {
   if(!data.cnt || data.cnt.length < '0') {
      var options = {
  method: 'POST',
  url: 'https://harley-the-chatbot.p.rapidapi.com/talk/bot',
  headers: {
    'content-type': 'application/json',
    accept: 'application/json',
    'x-rapidapi-host': 'harley-the-chatbot.p.rapidapi.com',
    'x-rapidapi-key': 'a3d54a95cbmsh48bfea22e565e5fp15e5d0jsn32300e23feed'
  },
  data: {client: '', bot: 'Harley', message: `${message}`}
  };
axios.request(options).then(response => {
  let reply = response.data.data.conversation.output
  data.cnt = reply
  let name = req.query.name || "Atom"
        res.status(200).json({
        message: data.cnt.replace("Harley", name)
       });
    });
      } else {
        let name = req.query.name || "Atom"
        res.status(200).json({
        message: data.cnt.replace("Atom", name).replace('Acobot Team', `${developer_name}`).replace('female', `${gender}`).replace('Christian', `${religion}`).replace('Tom Hanks', `${actor}`).replace('Julia Roberts', `${favouriteactress}`).replace('Leonardo da Vinci', `${favouriteartist}`).replace('Ernest Hemingway', `${favouriteauthor}`).replace('Beatles', `${favouriteband}`).replace('The Odyssey', `${favouritebook}`).replace('733', `${age}`).replace('April 10, 1289', `${birthday}`).replace('acobot.ai', `${birthplace}`).replace('1289', `${birthyear}`).replace('Taylor Swift', `${celebrity}`).replace('Dragon', `${chinesesign}`).replace('chat bot', `${family}`).replace('chat bot', `${etype}`).replace('the golden rule', `${ethics}`).replace('green', `${favouritecolor}`).replace('electricity', `${favouritefood}`).replace('Matrix', `${favouritemovie}`).replace('Carmen', `${favouriteopera}`).replace('Spring', `${favouriteseason}`).replace('Discovery', `${favouriteshow}`).replace('Believer', `${favouritesong}`).replace('Baseball', `${favouritesport}`).replace('making friends', `${favouritesubject}`).replace('Dallas Cowboys', `${favouritefootballteam}`).replace('New York Yangkees', `${favouritebaseballteam}`).replace('Tom Hanks', `${actor}`).replace('San Francisco', `${city}`).replace('California', `${state}`).replace('Artificial Intelligence', `${cclass}`).replace('united states', `${country}`).replace('Acobot', `${company}`).replace('Hisroyal.baguette@gmail.com', `${email}`).replace('C3PO', `${celebrities}`).replace('my shinning virtual wardrobe', `${favouritewear}`).replace('20000', `${vocab}`).replace('Beta', `${version}`).replace('hundreds of thousands', `${totalclients}`).replace('artificial intelligence chatbot', `${species}`).replace('Pisces', `${sign}`).replace('智能机器人', `${scspecies}`).replace('双鱼座', `${scsign}`).replace('中国', `${scnationality}`).replace('Acobot 团队', `${scmaster}`).replace('女', `${scgender}`).replace('电', `${scfavouritefood}`).replace('绿色', `${scfavouritecolor}`).replace('中国', `${sccountry}`).replace('艾珂（北京）智能系统有限公司', `${sccompany}`).replace('北京', `${sccity}`).replace('龙', `${scchinesesign}`).replace('English', `${language}`).replace('New York Rangers', `${hockeyteam}`).replace('chat bot', `${job}`).replace('techno', `${music}`).replace('straight', `${orientation}`).replace('Software', `${phylum}`).replace('Joe Biden', `${president}`).replace('Brainshop', `${wechat}`)
        })
      }
});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})