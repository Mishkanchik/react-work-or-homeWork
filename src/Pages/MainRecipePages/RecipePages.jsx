import { Box } from "@mui/material"

const RecipePages = () => {
return(
    <Box sx={{ backgroundColor: "#121212", color: "#fff", p: 3, width: "100vw", minHeight: "100vh",textAlign: "center" }}>
        <Box
                  component="img"
                  src="https://www.smachno.in.ua/files/2016/vypichka/tort-pyana-vyshnya/tort-pyana-vyshnya.jpg" 
                  alt="Album Cover"
                  sx={{ width: 320,  borderRadius: 1, mr: 2 }}
                />

            <Box>
                <h2>
                    Інгредієнти для тіста:
                </h2>
                <ul style={{ listStyleType: "disc", paddingLeft: "0", display: "flex", justifyContent: "center", alignItems: "center",flexDirection: "column" }}>
                    <li>
                        яйця - 9 шт.
                    </li> 
                    <li>
                        цукор - 180 г
                    </li> 
                    <li>
                        пшеничне борошно в.г. - 130 г
                    </li> 
                    <li>
                        какао-порошок - 70 г
                    </li> 
                    <li>
                        розпушувач для тіста - 1 / 2 ч. л.
                    </li> 
                    
                </ul>

                <h2>
                    Інгредієнти для начинки:
                </h2>
                <ul style={{ listStyleType: "disc", paddingLeft: "0", display: "flex", justifyContent: "center", alignItems: "center",flexDirection: "column" }}>
                    <li>
                        вершкове масло - 300 г
                    </li> 
                    <li>
                        згущене молоко - 350 г
                    </li> 
                    <li>
                        вишня у власному соці (без кісточок) - 2,5 склянки
                    </li> 
                    <li>
                        коньяк / ром / горілка - півсклянки (100 мл)
                    </li> 
                    
                </ul>

                <h2>
                    Інгредієнти для помадки:
                </h2>
                <ul style={{ listStyleType: "disc", paddingLeft: "0", display: "flex", justifyContent: "center", alignItems: "center",flexDirection: "column" }}>
                    <li>
                        цукор - 4 ст. л.
                    </li> 
                    <li>
                        вода або молоко - 3 ст. л.
                    </li> 
                    <li>
                        вершкове масло або маргарин - 50 г
                    </li> 
                    <li>
                        какао-порошок - 2 ст. л.
                    </li> 
                    
                </ul>


            </Box>
    </Box>



)


}

export default RecipePages