import { Box, Typography } from "@mui/material"
import { Container } from "react-bootstrap"

const BibliographyOfShakespearePage = () => {
return(
    <Box sx={{ backgroundColor: "#121212", color: "#fff", p: 3, width: "100vw", minHeight: "100vh",textAlign: "center" }}>
        <Box
                  component="img"
                  src="https://dovidka.biz.ua/wp-content/uploads/2015/10/sheksp-r-b-ograf-ya-skorocheno.jpg" 
                  alt="Album Cover"
                  sx={{ width: 620,  borderRadius: 1, mr: 2 }}
                />

            <Box>
                
                    <Typography style={{margin : "20px 400px"}}>
                        Шекспір біографія скорочено
                        Народився в місті Стратфорд-на-Ейвоні. Хрещений 26 квітня 1564.

                        По досягненні 18 років він одружився з Енн Хатауей – дочці одного заможного поміщика, яка на кілька років була старша за нього. У них було троє дітей.

                        Коли Вільяму було приблизно 23 роки, він переїхав до Лондона, де влаштувався на роботу. Спочатку він виконував будь дрібні роботи, а потім влаштувався в театр. Достовірно невідомо, коли почалася його кар’єра, але біографи відносять цей етап до середини 1580-х років.

                        1592 року Шекспір ​​був уже відомим драматургом, а також членом лондонської акторської трупи Бербеджа, яка при Якова I отримала королівський статус. До цього часу відноситься і перша згадка про «Генріха VI», яка ставилася на сцені театру «Роза», приналежному Філіпу Хенслоу.

                        У 1599 році його трупа побудувала новий театр на південному березі Темзи під назвою «Глобус». Через кілька років вони придбали ще один театр закритого типу «Блекфайерс». Завдяки стрімкій театральній кар’єрі, Шекспір ​​незабаром став дуже багатою людиною. Є відомості, що вже в 1597 році він придбав один з найбільших будинків у рідному Стретфорді.  Поєднуючи акторську і драматургічну діяльність, Шекспір ​​проводив більшу частину свого часу в Лондоні, але в перервах виїжджав додому.

                        На початку XVII століття багато театрів Лондона закривалися через спалахи чуми. Актори, залишаючись безробітними, їхали додому. Так, незадовго до своєї смерті Шекспір ​​повернувся в Стретфорд-на-Ейвоні. dovidka.biz.ua За 1606-1607 роки він написав ще кілька п’єс, а в 1613 зовсім перестав писати. Вважається, що останні три п’єси були написані спільно з іншим драматургом – Джоном Флетчером.
                        Джерело: https://dovidka.biz.ua/shekspir-biografiya-korotko
                    </Typography>
                
            </Box>
    </Box>



)


}

export default BibliographyOfShakespearePage