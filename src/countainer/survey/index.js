import React, { Component } from "react";
import "./style.css";
class survey extends Component {
  state = {
    page: "1",
    question: [
      {
        a: "Хүчээ зарцуулах, олон хүнтэй цуг байх дуртай ",
        b: "Эрч хүчээ нөөх,  ганцаарчилсан харилцаанд дуртай",
        key: ""
      },
      {
        a: "Аливаа зүйлсийг байгаагаар нь тайлбарлахыг илүүд үздэг",
        b: "Аливаа зүйлсийн боломжит хувилбаруудад илүү төвлөрдөг",
        key: ""
      },
      {
        a: "Логик, оюун бодол, шүүмжлэлт сэтгэглгээг илүүд үздэг",
        b: "Бусдыг ойлгох, уян зөөлөн байх, мэдрэмжийг илүүд үзэх",
        key: ""
      },
      {
        a: "Зохион байгуулалт сайтай цагаа сайн хувиарладаг",
        b:
          "Өөрийн хүссэн үедээ ажиллахыг илүүд үздэг, цагийг нь тулгах хандлагатай",
        key: ""
      },
      {
        a: "Нээлттэй, гадаад ертөнцдэх үйл явдлуудад илүү төвлөрдөг",
        b: "Дуу цөөтэй, өөрийн дотоод бодол мэдрэмжид илүү төвлөрдөг",
        key: ""
      },
      {
        a:
          "Амьдрах ухаан сайтай, барьж харж болох зүйлсэд итгэдэг, туршлагад үндэслэдэг",
        b: "Төсөөлөн бодох чадвар сайтай, шинэ санаа олдог, онолд тулгуурладаг",
        key: ""
      },
      {
        a: "Илэн далангуй, шулуун, тодорхой байдлаар харилцах нь их",
        b:
          "Бусдын ая эвийг олсон, эелдэг зөөлөн, урамшуулж дэмжсэн байдлаар харьцдаг",
        key: ""
      },
      {
        a: "Ажлаа гүйцэтгэж эхлэхээс өмнө төлөвлөж, хувиар гаргадаг",
        b: "Төлөвлөгөө гаргахаас илүү шууд гүйцэтгэлдээ орох сонирхолтой",
        key: ""
      },
      {
        a:
          "Олон төрлийн ажил үүрэг, олон нийтийн арга хэмжээ, харилцааг эрэлхийлдэг",
        b: "Хувийн орон зай, ганцаараа байх чимээгүй орчинг эрэлхийлдэг",
        key: ""
      },
      {
        a: "Энгийн хэрэглэж дадсан баттай аргыг хэрэглэх дуртай",
        b: "Өвөрмөц, шинэлэг боловч үр дүн нь тодорхойгүй аргад дуртай",
        key: ""
      },
      {
        a: "Өөрийн үзэл бодлоос няцдаггүй, тууштай, сэтгэл хөдлөл багатай",
        b: "Номхон, бусдыг хүлцэх хандлагатай, нөхөрсөг",
        key: ""
      },
      {
        a: "Дүрэм журам зохион байгуулалтыг илүүд үздэг",
        b: "Өөрт таалагдсанаа хийж, зөнгөөрөө чөлөөтэй байх дуртай",
        key: ""
      },
      {
        a: "Гадагш чиглэсэн, нийтэч, өөрийгөө чөлөөтэй илэрхийлдэг",
        b:
          "Дотогш чиглэсэн, дуу цөөтэй, өөрийгөө бусдад тэр бүр илэрхийлдэггүй",
        key: ""
      },
      {
        a: "Одоодоо төвлөрч амьдардаг",
        b: "Ирээдүйдээ нэлээд санаа тавьдаг",
        key: ""
      },
      {
        a: "Шударга ёсыг баримталдаг",
        b: "Өршөөнгүй",
        key: ""
      },
      {
        a: "Аливаа зүйлд бэлтгэж, төлөвлөгөө гаргадаг",
        b: "Чөлөөтэй байж, аяндаа болно гэсэн хандлагатай байдаг",
        key: ""
      },
      {
        a: "Идэвхи санаачлагатай",
        b: "Түрүүлж үйлдэл хийхээс илүү бусдад хариу үйлдэл үзүүлдэг",
        key: ""
      },
      {
        a: "Баримт, эд зүйл, “ямар байна вэ” гэдэгт төвлөрдөг",
        b: "Санаа, мөрөөдөл, “ямар байх боломжтой вэ” гэдэгт төвлөрдөг",
        key: ""
      },
      {
        a:
          "Буруутанд биш асуудалд өөрт нь төвлөрдөг, нөхцөл байдлыг харгалзаж үздэг",
        b: "Өөрийгөө эсвэл бусдыг буруутгах хандлагатай, мэдрэмтгий, өрөвч",
        key: ""
      },
      {
        a: "Дүрэм журам, хяналттай",
        b: "Дур зоргоороо, эрх чөлөөтэй",
        key: ""
      }
    ],
    colors: [
      { color: "#ffebee", select: false },
      { color: "#fce4ec", select: false },
      { color: "#f3e5f5", select: false },
      { color: "#ede7f6", select: false },
      { color: "#e8eaf6", select: false },
      { color: "#e3f2fd", select: false },
      { color: "#e1f5fe", select: false },
      { color: "#e0f7fa", select: false },
      { color: "#e0f2f1", select: false },
      { color: "#e8f5e9", select: false },
      { color: "#f1f8e9", select: false },
      { color: "#f9fbe7", select: false },
      { color: "#fffde7", select: false },
      { color: "#fff8e1", select: false },
      { color: "#fff3e0", select: false },
      { color: "#fbe9e7", select: false },
      { color: "#efebe9", select: false },
      { color: "#fafafa", select: false },
      { color: "#eceff1", select: false },
      { color: "#ffcdd2", select: false },
      { color: "#f8bbd0", select: false },
      { color: "#e1bee7", select: false },
      { color: "#d1c4e9", select: false },
      { color: "#c5cae9", select: false },
      { color: "#bbdefb", select: false },
      { color: "#b3e5fc", select: false },
      { color: "#b2ebf2", select: false },
      { color: "#b2dfdb", select: false },
      { color: "#c8e6c9", select: false },
      { color: "#dcedc8", select: false },
      { color: "#f0f4c3", select: false },
      { color: "#fff9c4", select: false },
      { color: "#ffecb3", select: false },
      { color: "#ffe0b2", select: false },
      { color: "#ffccbc", select: false },
      { color: "#d7ccc8", select: false },
      { color: "#f5f5f5", select: false },
      { color: "#cfd8dc", select: false },
      { color: "#ef9a9a", select: false },
      { color: "#f48fb1", select: false },
      { color: "#ce93d8", select: false },
      { color: "#b39ddb", select: false },
      { color: "#9fa8da", select: false },
      { color: "#90caf9", select: false },
      { color: "#81d4fa", select: false },
      { color: "#80deea", select: false },
      { color: "#80cbc4", select: false },
      { color: "#a5d6a7", select: false },
      { color: "#c5e1a5", select: false },
      { color: "#e6ee9c", select: false },
      { color: "#fff59d", select: false },
      { color: "#ffe082", select: false },
      { color: "#ffcc80", select: false },
      { color: "#ffab91", select: false },
      { color: "#bcaaa4", select: false },
      { color: "#eeeeee", select: false },
      { color: "#b0bec5", select: false },
      { color: "#e57373", select: false },
      { color: "#f06292", select: false },
      { color: "#ba68c8", select: false },
      { color: "#9575cd", select: false },
      { color: "#7986cb", select: false },
      { color: "#64b5f6", select: false },
      { color: "#4fc3f7", select: false },
      { color: "#4dd0e1", select: false },
      { color: "#4db6ac", select: false },
      { color: "#81c784", select: false },
      { color: "#aed581", select: false },
      { color: "#dce775", select: false },
      { color: "#fff176", select: false },
      { color: "#ffd54f", select: false },
      { color: "#ffb74d", select: false },
      { color: "#ff8a65", select: false },
      { color: "#a1887f", select: false },
      { color: "#e0e0e0", select: false },
      { color: "#90a4ae", select: false },
      { color: "#ef5350", select: false },
      { color: "#ec407a", select: false },
      { color: "#ab47bc", select: false },
      { color: "#7e57c2", select: false },
      { color: "#5c6bc0", select: false },
      { color: "#42a5f5", select: false },
      { color: "#29b6f6", select: false },
      { color: "#26c6da", select: false },
      { color: "#26a69a", select: false },
      { color: "#66bb6a", select: false },
      { color: "#9ccc65", select: false },
      { color: "#d4e157", select: false },
      { color: "#ffee58", select: false },
      { color: "#ffca28", select: false },
      { color: "#ffa726", select: false },
      { color: "#ff7043", select: false },
      { color: "#8d6e63", select: false },
      { color: "#bdbdbd", select: false },
      { color: "#78909c", select: false },
      { color: "#f44336", select: false },
      { color: "#e91e63", select: false },
      { color: "#9c27b0", select: false },
      { color: "#673ab7", select: false },
      { color: "#3f51b5", select: false },
      { color: "#2196f3", select: false },
      { color: "#03a9f4", select: false },
      { color: "#00bcd4", select: false },
      { color: "#009688", select: false },
      { color: "#4caf50", select: false },
      { color: "#8bc34a", select: false },
      { color: "#cddc39", select: false },
      { color: "#ffeb3b", select: false },
      { color: "#ffc107", select: false },
      { color: "#ff9800", select: false },
      { color: "#ff5722", select: false },
      { color: "#795548", select: false },
      { color: "#9e9e9e", select: false },
      { color: "#607d8b", select: false },
      { color: "#e53935", select: false },
      { color: "#d81b60", select: false },
      { color: "#8e24aa", select: false },
      { color: "#5e35b1", select: false },
      { color: "#3949ab", select: false },
      { color: "#1e88e5", select: false },
      { color: "#039be5", select: false },
      { color: "#00acc1", select: false },
      { color: "#00897b", select: false },
      { color: "#43a047", select: false },
      { color: "#7cb342", select: false },
      { color: "#c0ca33", select: false },
      { color: "#fdd835", select: false },
      { color: "#ffb300", select: false },
      { color: "#fb8c00", select: false },
      { color: "#f4511e", select: false },
      { color: "#6d4c41", select: false },
      { color: "#757575", select: false },
      { color: "#546e7a", select: false },
      { color: "#d32f2f", select: false },
      { color: "#c2185b", select: false },
      { color: "#7b1fa2", select: false },
      { color: "#512da8", select: false },
      { color: "#303f9f", select: false },
      { color: "#1976d2", select: false },
      { color: "#0288d1", select: false },
      { color: "#0097a7", select: false },
      { color: "#00796b", select: false },
      { color: "#388e3c", select: false },
      { color: "#689f38", select: false },
      { color: "#afb42b", select: false },
      { color: "#fbc02d", select: false },
      { color: "#ffa000", select: false },
      { color: "#f57c00", select: false },
      { color: "#e64a19", select: false },
      { color: "#5d4037", select: false },
      { color: "#616161", select: false },
      { color: "#455a64", select: false },
      { color: "#c62828", select: false },
      { color: "#ad1457", select: false },
      { color: "#6a1b9a", select: false },
      { color: "#4527a7", select: false },
      { color: "#283593", select: false },
      { color: "#1565c0", select: false },
      { color: "#0277bd", select: false },
      { color: "#00838f", select: false },
      { color: "#00695c", select: false },
      { color: "#2e7d32", select: false },
      { color: "#558b2f", select: false },
      { color: "#9e9d24", select: false },
      { color: "#f9a825", select: false },
      { color: "#ff8f00", select: false },
      { color: "#ef6c00", select: false },
      { color: "#d84315", select: false },
      { color: "#4e342e", select: false },
      { color: "#424242", select: false },
      { color: "#37474f", select: false },
      { color: "#b71c1c", select: false },
      { color: "#880e4f", select: false },
      { color: "#4a148c", select: false },
      { color: "#311b92", select: false },
      { color: "#1a237e", select: false },
      { color: "#0d47a1", select: false },
      { color: "#01579b", select: false },
      { color: "#006064", select: false },
      { color: "#004d40", select: false },
      { color: "#1b5e20", select: false },
      { color: "#33691e", select: false },
      { color: "#827717", select: false },
      { color: "#f57f17", select: false },
      { color: "#ff6f00", select: false },
      { color: "#e65100", select: false },
      { color: "#bf360c", select: false },
      { color: "#3e2723", select: false },
      { color: "#212121", select: false },
      { color: "#263238", select: false }
    ],
    result: {
      ISTJ: {
        about:
          "ISTJ хэв шинжийн хүмүүс аливаа тогтлолцоо болон байгууллагын дотор дүрэм журам, эмх цэгцийг бий болгож, хөгжүүлэхэд ихээхэн анхаардаг хариуцлагатай хүмүүс байдаг. Тэд амьдралынхаа бүх л хүрээнд маш эмх цэгцтэй хандаж юу ч хийсэн дүрэмж журам эмх цэгцтэй байдлыг эрхэмлэдэг.  Тогтвортой, хөдөлмөрч хүмүүс учраас өндөр бүтээмжтэй ажиллаж чаддаг. Хэдийгээр аливаа ажлыг ганцаараа хийхийг илүүд үздэг байж болох ч бусадтай харилцах, хамтрах ёстой үед өөрт оногдсон үүрэг даалгавраас ухардаггүй.",
        name: "Логик сэтгэгч",
        desc: "Итгэж найдаж болохуйц прагматик төрлийн хүн",
        rel: [
          "Sting",
          "Denzel Washington ",
          "Angela Merkel",
          "Natalie Portman",
          "George Washington",
          "Gondoleezza Rice",
          "George H.W Bush",
          "Eddard Stark (Got)",
          "Hermonie Granger (Harry Potter)",
          "Geralt of Rivia (The Witcher series)",
          "Dana Scully  (X-Files)",
          "Jason Bourne  (Bourne)",
          "Thorin Oakwnshield (The Hobbit)",
          "Stannis Baratheon (GOT)",
          "Inspector Lestarde  (Sherlock Holmes)",
          "Mr. Darcy (Pride and Prejudice)"
        ]
      },
      ISFJ: {
        about:
          "Ажилсаг, бусдыг халамжлахад багагүй анхаардаг бөгөөд уламжлал, зохион байгуулалтыг эрхэмлдэг үнэнч хүмүүс. Туршлагатай, нигүүлсэнгүй, халамжтай, бусдыг дэмжих болон аливаа зүйлсээс хамгаалах онцгой хүсэлтэй хүмүүс. Боловсон харилцаатай, тууштай агаад нийгэм олон нийтэд туслах дуртай. Энэ хэв шинжийн хүмүүс ажил хэрэгтээ хариуцлагатай ханддаг тогтвортой найдвартай ажилчид байдаг. Үүрэг хариуцлагаа гүн ухамсарласан, тэр дундаа бусдад туслах тохиолдолд уг чанар нь илүү их илэрч гардаг. Найдвартай бөгөөд хүлээсэн зүйлийг нь хийхэд итгэж болох хүн гэдгийг нь хүмүүс мэдээсэй гэж хүсдэг. Аливаа юманд сэтгэлээсээ ханддаг, ёс журамтай агаад ажлыг дуустал нь үргэлжлүүлсээр байдаг.",
        name: "Хамгаалагч",
        desc:
          "Өөрийн хайртай хүмүүсийнхээ төлөө бүгдийг хийдэг, сайхан сэтгэлтэй хүн",
        rel: [
          "Halle Berry",
          "Queen Elizabeth II",
          "Beyonce",
          "Vin Diesel ",
          "Kate Middleton ",
          "Anne Hathaway ",
          "Lance Reddick",
          "Selena Gomez ",
          "Cately Stark (GOT)",
          "Samwise Camgee (LOTR)",
          "DR Watson (Sherlock Holmes)",
          "Triss Merigold  (The Winter)",
          "Will Turner (Pirates of the Caribbean)",
          "Pam Beesly (The Office)",
          "Vito Corleone The Godfather (Vito Corleone The Godfather)",
          "Bree Van de Kamp (Desperate Housewives)"
        ]
      },
      ESTJ: {
        about:
          "ESTJ хэв шинжийн хүмүүс ажилч хичээнгүй, тогтсон дүрэм журмыг эрхэмлэдэг, аливаа төсөл,  хүмүүсийг зохион байгуулж, өөрийн чадварыг сорих хүсэл тэмүүлэлтэй байдаг.  Дүрэм журмыг бат сахиж, аливаа зүйлсэд өндөр хариуцлагатай ханддаг чанар нь тэднийг ажилдаа маш нухацтай хандахад хүргэдэг. Эргэн тойрныхоо хүмүүсийг ч гэсэн өөртэйгөө ижил зохион байгуулалттай, хариуцлагатай байлгахыг хүсдэг хэрэв орчин тойрон нь эсвэл эргэн тойрных нь хүмүүс зохион байгуулалтгүй байвал ESTJ хэв шинжийн хүмүүс эмх журмыг тогтоох санаачлага гарган уриалах нь олон тохиолддог. ",
        name: "Гүйцэтгэгч",
        desc: "Аливаа зүйлсийг зохион байгуулахдаа сайн, хүчтэй удирдагч",
        rel: [
          "Sonia Sotomayor",
          "John D.Rockefeller",
          "Judge Judy",
          "Frank Sinatra",
          "James Monroe",
          "Laura Linney",
          "Lyndon B.Johnson ",
          "Sarah Michelle Gellar",
          "Boromir (LOTR)",
          "Dwight Schurte (The Office )",
          "Claire DunphyModern Family (Modern Family)",
          "An Lucia Cortez (Lost)",
          "Violet Crawley (Downton Abbey)",
          "Robb Stark (GOT)",
          "Lisa Cuddy  (House M.D)",
          "Porthos (The Three musketeers)"
        ]
      },
      ESFJ: {
        about:
          "ESFJ хэв шинжийн хүмүүс бусад хүмүүст юу хэрэгтэй байгааг сайн мэддэг бөгөөд эргэн тойрныхоо хүмүүст олон талаар тусалдгаас гадна  өөрсдийн үүргийг идэвхитэйгээр биелүүлдэг. Тэд өөрсдийн эргэн тойрондох хүмүүсийн сэтгэл мэдрэмжид анхаарч зохицолтой байдлыг эрхэмлэдэг. Үнэнч занг эрхэмлэдэг бөгөөд гэр бүл, найзнараа ажил мэргэжил, боловсрол зэрэг амьдралын бусад хүрээний зүйлсээс илүү чухалд тооцдог. Энэ хэв шинжийн хүмүүс өөрсдийн хүч чармайлт, цаг зав, сэтгэл хөдлөлөө бусдад харамгүйгээр зарцуулдаг. Зохион байгуулах гойд чадвартай бөгөөд эргэн тойрондоо зохицлыг авчирахын тулд уг чадвараа ашиглах нь олон тохиолддог.",
        name: "Төлөөлөгч",
        desc: "Хүнд туслахыг эрмэлзэгч, халамжтай, нийгмийн идэвхитэй хүн",
        rel: [
          "Bill Clinton",
          "Taylor Swift",
          "Jennifer Garner ",
          "Steve Harvey ",
          "Danny Glover",
          "Jennifer Lopez",
          "Sally Field",
          "Tyra Banks ",
          "sansa stark (GOT)",
          "Dean Winchester (Supernatural)",
          "Monica  (Friends)",
          "Carmelo Soprano (The sporanos)",
          "Cersei Lannister (Got)",
          "Jack Shephard (Lost)",
          "Larry Bloom (OITNB)",
          "Mrs. Hudson (Sherlock Holmes)"
        ]
      },
      ISTP: {
        about:
          "ISTP хэв шинжийн хүмүүс гарын ур дүй сайтай, нэлээд ажигч гярхай хүмүүс байдаг. Тэд аливаа практик асуудлуудыг чадварлагаар шийдвэрлэдгээс гадна тэдгээрт маш уян хатан байдлаар ханддаг.  Өөрсдийн шийдвэрийг бусдаас ангид байдлаар цэвэр бие даасан шинжтэйгээр хийхийг эрмэлздэг бөгөөд шинэ нөхцөл байдалд түргэн дасан зохицож чаддаг. ISTP хэв шинжийн хүмүүс бусадтай илэн далангуй, шууд  байдлаар  харилцаж гэнэтийн шийдвэрүүдийг гаргах нь олон байдаг.  Тэд өөрсдийгөө сул тавьж чөлөөтэй байх дуртай бөгөөд нэгэн хэвийн дүрэм журам, цагийн хувиарт баригдахыг хүсдэггүй.",
        name: "Эрдэмтэн",
        desc: "Байгаа зүйлсээ бүрэн ашиглаж чаддаг практикал хүн",
        rel: [
          "Clint Eastwood",
          "Milla Jovovich",
          "Olivia Wilde",
          "Bear Grylls",
          "Tom Cruise",
          "Micheal Jordan",
          "Daniel Craig",
          "Michelle  Rodriguez",
          "Arya Stark (GoT)",
          "Michael Western (Burn Notice)",
          "Jack Bauer  (24)",
          "Indiana Jones (Indiana Jones)",
          "John McClane (Die Hard)",
          "Angus MacCyver (MacCyver)",
          "Lisbeth Salander (The Girl with the Dragon tattoos)",
          "James Bond  (Bond)"
        ]
      },
      ISFP: {
        about:
          "Зөвхөн одоо цагтаа л амьдарч, хүрээлэн буй орчноо баяр хөөр, бага зэрэг урам зоригтойгоор таашаадаг эелдэг зөөлөн халамжлагчид. Уян хатан бөгөөд амьдралаас авч болох зүйлсээсээ таашаал авч, урсгал дагуу явах дуртай. Даруу төлөв, дуугүй зан байдалдтай, зарим талаараа ойлгоход хэцүү мэт санагдаж болно. Гэсэн ч, сайн мэддэг хүмүүсийнхээ хувьд дулаахан, нөхөрсөг, амьдралын олон туршлагаасаа солилцохын хүслэн болсон байдаг. Гоо зүйн өндөр мэдрэмжтэй бөгөөд эргэн тойрноосоо гоо сайхныг эрэлхийлж явдаг. Нарийн мэдрэмжтэй, заримдаа урлагт байгалаас заяасан авъяастай байдаг. Гол төлөв объектыг ашиглахдаа чадварлаг ба будгийн бийр, сийлбэрчний хутга гэх мэт бүтээлч багажуудыг дээд түвшинд эзэмшсэн байх магадлалтай.",
        name: "Адал явдал хайгч",
        desc: "Шинэ зүйлийг эрж хайн туршиж байдаг уян хатан хүн",
        rel: [
          "Kevin Costner",
          "Avril Lavgine",
          "Michael Jackson",
          "Britney Spears",
          "Lana Del Ray ",
          "Jessica Alba",
          "Joss Stone",
          "Victoria Azarenka ",
          "Beatrix Kiddo (Kill Bill)",
          "Kate Austen (Lose)",
          "Claire Littleton (Lost)",
          "Hugo Reyes (Lost)",
          "Thea Queen (Arrow)",
          'Remy Hadley ("Thirteen) (House M.D)',
          "Jesse Pinkman (Breaking Bad)",
          "Eowyn  (LOTR)"
        ]
      },
      ESTP: {
        about:
          "ESTP хэв шинжийн хүмүүс эрч хүчтэй, үргэлж шинэ сонирхолтой зүйлсийг эрэлхийлж байдаг бөгөөд нийгмийн харилцаанд идэвхитэй оролцдог. Шинэ нөхцөл байдалд хурдан дасан зохицох чадвартайгаас гадна түргэн сэтгэлгээтэй учраас богино хугацааны дотор шийдвэрээ гаргаж чаддаг, энэхүү чадвараа аливаа онол, санаанаас илүү практик асуудлуудад ашиглах магадлалтай. Энэ хэв шинжийн хүмүүс өндөр хошин шогийн мэдрэмжтэй байх нь олон ч зарим тохиолдолд хэт наргианч байдлаасаа болоод бусдыг гомдоох тохиолдол гардаг.  Тэд ямар ч зүйлийг хүндээр тусгаж авахыг хүсдэггүй бөгөөд аливаа зүйлсийг богино хугацааны дотор гүйцэтгэж үргэлж шинэ зүйлстэй тулгарахыг хүсдэг.",
        name: "Энтрепренер",
        desc: "Ухаалаг, эрч хүчээр дүүрэн, эрсдэл даах чадвартай хүн",
        rel: [
          "Ernest Hemingway",
          "Jack Nicholson ",
          "Eddie Murphy ",
          "Madonna ",
          "Bruce Willis ",
          "Michael J.Fox",
          "Nicolas Sarkozy",
          "Samuel L.Jackson ",
          "Lincoln Burrows  (Prison Break)",
          "Jamie Linnester (GoT)",
          "Hank Schrader  (Breaking bad)",
          "Seth Grayson (House of Cards)",
          "Gabrielle Solis (Desperate  housewives)",
          "Fiona Glenanne  (Burn Notice)",
          "Philip Wenneck",
          "D'artagnan"
        ]
      },
      ESFP: {
        about:
          "ESFP хэв шинжийнхэн эргэн тойрныхоо хүмүүсийн сэтгэлийг татдаг,хөгжөөх чадвартай хүмүүс байдаг.  Тэд түргэн хөдөлгөөнтэй, эрч хүчтэй, зугаатай байдлыг эрхэмлэгчид бөгөөд  хувцас, байгаль, амьтад, хүмүүсээс их хэмжээний баяр баяслыг авч чаддаг. Ерөнхийдөө бусадтай ярих дуртай, халуун дулаан харилцаа өрнүүлж чаддаг хүмүүс бөгөөд бусдад ихээхэн нөлөөтэй амьдралын урам зоригоор дүүрэн байдаг. Аливаа үйл явдлын гол цэг, бусдын анхаарлын төвд байх дуртай. Дүрсгүй байдлаар чөлөөтэй хошигнодог, бусдыг илэн далангүй байлгаж, цагийг сайхан өнгөрөөхөд нь туслах дуртай. ",
        name: "Уран сайханч",
        desc:
          "Эрч хүчээр дүүрэн хүсэл эрмэлзэлтэй хүн - тэдний хажууд амьдрал үргэлж хөгжилтэй байдаг",
        rel: [
          "Adele",
          "Marilyn Monroe ",
          "Jamie Oliver ",
          "Jamie Foxx ",
          "Adam Levine ",
          "Miley Cyrus",
          "Serena Williams ",
          "Steve Irwin",
          "Dandelion (The Witcher series)",
          "Ygritte (GoT)",
          "Penny (The Big Bang Theory)",
          "Angela Montenegro  (Bones)",
          "Gob Bluth (Arrested Development)",
          "Lindsay Bluth Funke (Arrested Development)",
          "Peregrin Took (LOTR)",
          "Jack Dawson (Titanic)"
        ]
      },
      INTJ: {
        about:
          "INTJ хэв шинжийн хүмүүс асуудлыг шийдвэрлэх, шинэ санаагаараа тогтлолцоог хөгжүүлэх хүсэлтэй хүмүүс байдаг. Тэд өөрсдийгөө, ажлын газраа, гэрээ гээд бүх л нөхцөлд хөгжүүлж болох зүйлсийг сайн олж харж чаддаг. Ихэнхи зүйлд өөрийн оюун дүгнэлтээр хандахыг хүсдэг учраас нарйин ярвигтай асуудлуудад шийдэл хайх дуртай. Өөрийн сэтгэл хөдлөлийг дарах үгүйсгэх хандлагатайгаас гадна хэтэрхий сэтгэл хөдлөлтэй хүмүүст таагүй хандлагатай байх магадлалтай. Өөрсдийн хамтрагч болон найз нөхдөд өндөр шалгуур тавьдаг бөгөөд өргөн мэдлэг, ухаантай хүмүүсийг найз нөхдөөрөө сонгохыг эрмэлздэг. ",
        name: "Архитект",
        desc: "Төсөөлөн бодогч, бүх зүйлд бодлого төлөвлөгөөтэй ханддаг",
        rel: [
          "Samantha Power",
          "Christopher Nolan",
          "Collin Powell",
          "Elon Musk",
          "Arnold Schwarzenegger",
          "Vladimir Putin",
          "Michelle Obama ",
          "Fredrich Nietzsche",
          "Walter White (Heisenberg)",
          "Petyr Baelish (Littlefinger)",
          "Tywin Lannister (GOT)",
          "Gandalf the Grey (LOTR)",
          "Yennefer of Vengerberg (The Witcher series)",
          "Katniss Everdeen (The hunger games)",
          "Seven of Nine (Star Trek:voyager)",
          "Professor Moriarty (s=Sherlock Holmes)"
        ]
      },
      ENTJ: {
        about:
          "ENTJ хэв шинжийн хүмүүс өөрчлөн зохион байгуулах дуртай хүмүүс байдаг бөгөөд энэ чанар нь тэднийг удирдах байр сууринд аваачих нь олон тохиодог. Тэд нөхцөл байдлыг өөрсдийн хяналтад байлгаж,  богино хугацаанд оновчтой шийдвэр гаргахын зэрэгцээ урт хугацааны төлөвлөгөө гаргах эрмэлзэлтэй байдаг.  Энэ хэв шинжийн хүмүүс бодит нөхцөл байдлыг задлан шинжлэх замаар өөрсдийн эргэн тойрныг зохион байгуулалт эмх цэгцэд оруулдаг хэрэв тогтлолцооны аль нэг хэсэгт алдаа дутагдал байвал түүнийг сайжруулах арга замыг идэвхитэйгээр хайна.  ",
        name: "Удирдагч",
        desc:
          "Хүчтэй, өөрийн гэсэн үзэл бодолтой удирдагч, үргэлж гарц хайж олдог эсвэл шинээр бий болгодог хүн",
        rel: [
          "Steve Jobs ",
          "Gordon Ramsay",
          "Harrison Ford",
          "Margaret Thatcher",
          "Whoopi Goldberg",
          "Jim Carrey",
          "Franklin D.Roosevelt",
          "David Petraeus",
          "Tony Saprona (The Sporanos)",
          "David Palmer (24)",
          "Malcolm Merlyn (Arrow)",
          "Mary Talbot (Downton Abbey)",
          "Francis J. Underwood (house of cards)",
          "Jacqueline A. Sharp (house of Cards )",
          "River Tam (Firefly)",
          "Milady de Winter (The three musketeers)"
        ]
      },
      ENTP: {
        about:
          "ENTP хэв шинжийн хүмүүс олон төрлийн шинэ санаа гаргах чадвартай хүмүүс байдаг. Ухаалаг, сониуч зан тэднийг хүмүүс, төрөл бүрийн тогтлолцоо зэрэг өөрийн эргэн тойрондох зүйлсийн зүй тогтлыг эрэхийлэхэд хүргэж олон төрлийн асуултыг тавьдаг хүмүүс болоход нь нөлөөлдөг. Тэд аливаа санаа хийсвэр ойлголтуудтай холбоотой зүйлсийн тухай ярих сонирхолтойгоос гадна сайн хөгжсөн хошин шогийн мэдрэмжтэй байх нь олон. Энэ хэв шинжийн хүмүүс аливаа зүйлд хэт ач холбогдол өгөлгүй өөрийн хүссэнэээр чөлөөтэй амьдрахыг хүсдэг. ",
        name: "Мэтгэлзэгч",
        desc: "Оюуны сорилтонд ороход үргэлж бэлэн байдаг ухаантай, сониуч хүн",
        rel: [
          "Alfred 'Weird AI' Yankovic",
          "Adam Savage",
          "Sarah Silverman",
          "Mark Twain",
          "Tom Harris",
          "Thomas Edison",
          "Celine Dion",
          "Sacha Baron Cohen",
          "Captain Jack Sparrow",
          "Jim Halpert  (The Office)",
          "Irene Adler  (Sherlock Holmes)",
          "The Joker  (Batman series)",
          "Tyrion Lannister (GOT)",
          "Julian sark (Alias)",
          "Felicity Smoak (Arrow)",
          "Dr.Emmett Brown  (Back to the Future)"
        ]
      },
      INTP: {
        about:
          "INTP хэв шинжийн хүмүүс логик задлан шинжилгээ, тогтлолцоо, дүрслэн бодохуйд гойд сонирхолтой байдаг. Тэд аливаа зүйлсийн бүхэллэг шинжийг олж харан тэдгээрт нийтлэг үйлчилж буй зүй тогтлыг онолын үүднээс тайлбарлахад төвлөрдөг. Тэд өөрсдийн бодолд гүн автах нь олон байдаг учраас эргэн тойрныхоо зүйлс, өдөр тутмын хэрэгцээндээ хайхрамжгүй ханддаг байх магадлалтай бөгөөд бусад хүмүүс ч тэднийг ингэж дүгнэх нь олон. Тэд шинэ олж мэдсэн зүйлсээ үргэлж хуучинтайгаа холбон шинэ ойлголт, холбоосуудыг үүсгэхийн тулд дотоод бодлуудад төвлөрч байдаг.",
        name: "Логик сэтгэгч",
        desc: "Мэдлэг боловсролын төлөө тууштай зүтгэгч, шинийг санаачлагч",
        rel: [
          "Bill Gates",
          "Ellen Page",
          "Kristen Stewart",
          "Albert Einstein",
          "Rene Decartes",
          "Blaise Pascal",
          "Isaac Newton",
          "Stanley Crouch ",
          "Aemon Targaryen (GOT)",
          "Lord Varys (GOT)",
          "Neo (The Matrix)",
          "Alexander Mahone  (Prison Break)",
          "Marshall Flinkman (Alias)",
          "Chloe O'Brian (24)",
          "Lesile Winkle  (The Big Bang Theory)",
          "Abed Nadir  (Community)"
        ]
      },
      INFP: {
        about:
          "INFP хэв шинжийн хүмүүс өөрсдийн үнэт зүйлс итгэл үнэмшилд голчлон төвлөрдөг, төсөөлөмтгий хүмүүс байдаг. Тэд маш олон төрлийн боломж, эерэг шинжүүдийг олж харж чаддаг. Энэ хэв шинжийн хүмүүс өрөвч зөөлөн сэтгэлтэй, мэдрэмтгийгээс гадна өөрийн болон бусдын хөгжилд ихээхэн анхаарах хандлагатай. Хувийн орон зай нь тэдний хувьд хамгийн чухал зүйлсийнх нь нэг бөгөөд бусадтай тийм ч их ярьдаггүй. Тэд хүн бүр өөрсдийн гэсэн онцлог шинжтэй бөгөөд өөрийнхөөрөө байх ёстой гэдэгт итгэдэг ч ёс зүйн үнэт зүйлс нь зөрчигдөхөд дургүй. Өөрсдийн үнэт зүйлс, санаануудыг бусадтай хуваалцаж бусдад өөрсдөнтэй нь ижил зүйл хийхийг санал болгох дуртай. Олон талаар бүтээлч, шинэ санаа гаргах чадвар нь урлагтай холбогдох боломжийг нээж өгдөг.",
        name: "Холбогч",
        desc: "Уян зөөлөн энэрэнгүй тусч хүн",
        rel: [
          "William Shakespeare",
          "J.R.R Tolkien",
          "Bjork",
          "Johnny Depp",
          "Julia Roberts",
          "Lisa Kudrow",
          "Tom Hiddleston ",
          "Alicia Keys",
          "Frodo Baggins  (LOTR)",
          "Anne (Anne of Green Gables)",
          "Fox Mulder  (X-Files)",
          "Amelie Poulain  (Amelie)",
          "Arwen  (LOTR)",
          "Sybil Branson (Downton Abbey)",
          "Lance Swets",
          "Konstatin Levin  (Anna Karenina)"
        ]
      },
      INFJ: {
        about:
          "INFJ хэв шинжийн хүмүүс бусдад өөрсдийнхөө дотоод нөөц бололцоог танихад нь тусалж урамшуулан  оновчтой зөвөлгөөг өгч чаддаг. Аливаа зүйлд тууштай, бүтээлчээр ханддаг чанар нь бусдад тулгараад буй асуудлыг шийдвэрлэхэд нь туслах сайн санаануудыг олоход нь тусалдаг. Тэд бусдын сэтгэл хөдлөл мэдрэмжийг маш сайн ойлгодог ч хувийн орон зайгаа эрхэмлэдэг, ихэвчлэн ганцаараа байдаг бөгөөд маш цөөн тооны хүмүүсийг сонгож өөрийн бодол мэдрэмжийг хуваалцдаг.",
        name: "Дэмжигч",
        desc:
          "Дотроо бодолтой, ойлгомжтой, бусдад урам зориг шинэ сэдэл төрүүлж байдаг төрлийн хүн",
        rel: [
          "Martin Luther King ",
          "Nelson Mandela",
          "Mother Teresa",
          "Alanis Morissette",
          "Jimmy Carter",
          "Nicole Kidman",
          "Geothe",
          "Morgan Freeman",
          "Jon Snow (Got)",
          "James Wilson  (House M.D)",
          "Aragorn  (LOTR)",
          "Galadriel  (LOTR)",
          "Michael Scofield (Prison Break)",
          "Rose Bukater (Titanic)",
          "Desmond Hume (Lost)",
          "Aramis  (The three musketeers)"
        ]
      },
      ENFJ: {
        about:
          "ENFJ хэв шинжийн хүмүүс хүмүүст юу тустай байх талаар сэтгэж бодох сонирхолтой хүмүүс байдаг. Тэд бусад хүмүүсийн чадварыг олж харах, бусдыг ятгаж нөлөөлөх чадвар өндөртэй. Энэ хэв шинжийн хүмүүс ихэвчлэн эрч хүч урам зоригоор дүүрэн идэвхитэй амьдралын хэв маягтай хүмүүс байдаг. Бусдын зовлон, сэтгэл зовинолыг хүчтэй мэдэрдэг бөгөөд нөхцөл байдлыг сайжруулах талдээр эерэгээр ханддаг. Тэд нийгмийн идэвхитэй төрөл бүрийн зүйлийг санаачилж хийхээр оролдож байдаг нь бусдыг хөгжүүлэх зорилготой байх нь олон. ",
        name: "Тэмцэгч",
        desc: "Хамт олноо урамшуулж чаддаг харизмтай удирдагч хүн",
        rel: [
          "Barack Obama ",
          "Oprah Winfrey",
          "John Cusack",
          "Ben Affleck",
          "Sean Connery",
          "Jennifer Lawrence ",
          "Demi Lovato",
          "Lucy Liu",
          "Daenerys Targaruen (GoT)",
          "Morpheus  (The Matrix)",
          "The Oracle  (The Matrix)",
          "Skyler White  (Breaking Bad)",
          "Laurel Lance (Arrow)",
          "Isobel Crawley (Downton Abbey)",
          "Seeley Booth (Bones)",
          "Elizabeth Bennet (Pride and Prejudice)"
        ]
      },
      ENFP: {
        about:
          "ENFP хэв шинжийн хүмүүс шинэ санаа олох,  хүмүүстэй холбоотой үйл ажиллагаанд идэвхитэйгээр оролцдог. Бусадтай халуун дулаан харилцаа өрнүүлж чаддаг, эрч хүчтэй хүмүүс бөгөөд бусдыг өөрийнхөөрөө байж, шинийг санаачлахад нь туслах дуртай.  Энэ хэв шинжийн хүмүүс ихэвчлэн хэрсүү ухаантай, сайн ярилцагчид байдгаас гадна хэл бичгийн өндөр авъястай байдаг. Төсөөлөн бодох чадвар сайтай, өөрийнхөөрөө эрх чөлөөтэй байхыг эрмэлздэг учраас урлагтай холбогдох нь ч олон тохиолдоно.",
        name: "Хайгуулч",
        desc:
          "Асар их урам зоригтой, бүтээлч, бусадтай хамтран нэг зүйл уруу зорьж чадах өөдрөг хүн",
        rel: [
          "Robert Downey J.R",
          "Will Smith",
          "Robin Williams ",
          "Drew Barrymore",
          "Russel Brand",
          "Quentin Tarantino",
          "Meg Ryan",
          "Kelly Clarkson",
          "Micheal Scott (The Office)",
          "Phil Dunphy (Modern Family)",
          "Piper Chapman  (OITNB)",
          "Hoban Wahsburne  (Firefly)",
          "Peeta Mellark (The hunger games)",
          "Jennifer Keller (Stargate Atlantis)",
          "Carrie Bradshow  (Sex and the city )",
          "Willy wonka  (Charlie and the chocolate Factory)"
        ]
      }
    },
    age: "",
    job: "",
    gender: "",
    instagram: "",
    facebook: "",
    hobby: "",
    phone: "",
    single: "true",
    current: {},
    selected_colors: []
  };
  componentDidMount() {
    this.setState({
      current: {
        a: this.state.question[0].a,
        b: this.state.question[0].b,
        step: 1
      }
    });
  }
  change = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };
  next_quetion = (step, answer) => {
    if (step === this.state.question.length) this.setState({ page: "3" });
    else {
      const { question } = this.state;
      question[step].key = answer;
      step++;
      this.setState({
        current: {
          a: this.state.question[step - 1].a,
          b: this.state.question[step - 1].b,
          step: step
        }
      });
    }
  };
  selectColor = e => {
    const { colors } = this.state;
    colors[e].select = !colors[e].select;
    let selected_colors = colors.filter(color => color.select === true);
    selected_colors.length === 5 && this.setState({ page: "4" });
    this.setState({ colors, selected_colors });
  };
  render() {
    const { page, current, colors } = this.state;
    return (
      <div className="page-survey">
        <div className={page === "2" ? "center" : "up-100 center"}>
          <div
            className="survey-cont"
            style={{
              width: page === "3" && 1170,
              marginTop: page === "3" && 50
            }}
          >
            <img
              src={require("../../assets/images/bglogo.png")}
              className="bg-logo"
              alt="background"
            />
            <div className="survey-header">
              <div className="logo">
                <img
                  src={require("../../assets/images/fume_logo_full.png")}
                  alt="logo"
                />
              </div>
            </div>
            {/* first section*/}
            {page === "1" && (
              <div style={{ position: "relative" }}>
                <div className="survey-title color">
                  ЕРӨНХИЙ МЭДЭЭЛЛИЙН СУДАЛГАА
                </div>
                <div className="survey-desc">
                  ТА МЭДЭЭЛЛЭЭ ҮНЭН ЗӨВ БӨГЛӨНӨ ҮҮ
                </div>
                <div className="questions-cont first">
                  <div className="input-item">
                    <div className="input-title">Нас:</div>
                    <div className="input">
                      <input type="number" name="age" onChange={this.change} />
                    </div>
                  </div>
                  <div className="input-item">
                    <div className="input-title">Мэргэжил:</div>
                    <div className="input">
                      <input type="text" name="job" onChange={this.change} />
                    </div>
                  </div>
                  <div className="input-item">
                    <div className="input-title">Хүйс:</div>
                    <div className="input">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={this.change}
                      />
                      <span>Эр</span>
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={this.change}
                      />
                      <span>Эм</span>
                    </div>
                  </div>
                  <div className="input-item">
                    <div className="input-title">Инстаграм хаяг:</div>
                    <div className="input">
                      <input
                        type="text"
                        name="instagram"
                        onChange={this.change}
                        style={{ paddingLeft: 16 }}
                      />
                      <span className="at">@</span>
                    </div>
                  </div>
                  <div className="input-item">
                    <div className="input-title">Фэйсбүүк хаяг:</div>
                    <div className="input">
                      <input
                        type="text"
                        name="facebook"
                        onChange={this.change}
                      />
                    </div>
                  </div>
                  <div className="input-item">
                    <div className="input-title">Хобби:</div>
                    <div className="input">
                      <input type="text" name="hobby" onChange={this.change} />
                    </div>
                  </div>
                  <div className="input-item">
                    <div className="input-title">Утас:</div>
                    <div className="input">
                      <input
                        type="number"
                        name="phone"
                        onChange={this.change}
                      />
                    </div>
                  </div>
                  <div className="input-item">
                    <div className="input-title">Гэр бүлийн байдал:</div>
                    <div className="input">
                      <select onChange={this.change} name="single">
                        <option value="true">Гэрлээгүй</option>
                        <option value="false">Гэрлэсэн</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div
                  className="button"
                  onClick={_ => this.setState({ page: "2" })}
                >
                  Дараах &gt;
                </div>
              </div>
            )}
            {page === "2" && (
              <div>
                <div className="survey-title">
                  Доор өгөгдсөн лавлагаа бүрээс А эсвэл Б хувилбарын аль нь
                  тантай илүү тохирч байгааг сонгоно уу? Ингэхдээ хариултаа
                  удаан бодолгүйгээр, анхны сэтгэгдлээрээ сонгох нь тестийн үр
                  дүнг илүү бодитой гаргахад ач холбогдолтой.
                </div>
                <div className="questions-cont">
                  <div className="content-item">
                    <div>
                      <div
                        className="ask a"
                        onClick={_ => this.next_quetion(current.step, "a")}
                      >
                        <div className="before">А</div>
                        {current.a}
                        <canvas
                          height="0"
                          width="0"
                          // style="border-radius: inherit; height: 100%; left: 0px; position: absolute; top: 0px; width: 100%;"
                        ></canvas>
                      </div>
                      <div
                        className="ask b"
                        onClick={_ => this.next_quetion(current.step, "b")}
                      >
                        <div className="before">Б</div>
                        {current.b}
                        <canvas
                          height="0"
                          width="0"
                          // style="border-radius: inherit; height: 100%; left: 0px; position: absolute; top: 0px; width: 100%;"
                        ></canvas>
                      </div>
                    </div>
                  </div>
                  <div className="page-count">
                    <div className="count">{current.step}/20</div>
                    <div
                      className="line"
                      style={{
                        width: `calc(${
                          current.step === 1
                            ? "0"
                            : (100 / this.state.question.length) *
                              (current.step - 1)
                        }%)`
                      }}
                    ></div>
                    <div className="line-bg"></div>
                  </div>
                </div>
              </div>
            )}
            {page === "3" && (
              <div style={{ position: "relative" }}>
                <div className="survey-title color">GRADIENT COLOR CHART</div>
                <div className="survey-desc">
                  ТА ХАМГИЙН ДУРТАЙ 5 ӨНГӨӨ ДАРААЛЛЫН ДАГУУ СОНГОНО УУ
                </div>
                <div className="colors-cont">
                  {colors.map((color, index) => {
                    return (
                      <div
                        key={index}
                        className={`colors-item ${
                          color.select === true ? "color-selected" : ""
                        }`}
                        style={{ background: color.color }}
                        onClick={e => this.selectColor(index)}
                      ></div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default survey;
