import React, { useContext, useState } from "react";
import { Alert, ScrollView, TouchableOpacity, View } from "react-native";

import {
  Container,
  TextTitle,
  SubTitle,
  TextOptions,
  Input,
  ImageTop,
} from "./styles";
import Gradient from "../../components/Gradient";
import CustomDropDown from "../../components/CustomDropDown";
import PrimaryButton from "../../components/PrimaryButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import useApi from "../../hooks/useApi";
import { Context as UserContext } from "../../context/userContext";

function DetailsFullStack({ navigation }) {
  const [selected, setSelectedLocal] = useState();
  const { stateUser, setTeams } = useContext(UserContext);

  const apiCall = useApi({
    method: "POST",
    url: "/cadastro/cadastroAluno",
  });

  async function candidatarUsuario() {
    try {
      const response = await apiCall(
        {},
        {
          userId: stateUser.infos._id,
          funcao: "FullStack",
          nivel: selected,
        }
      );

      if (response.status === 200) {
        Alert.alert(
          "Atenção!",
          "Os times estão endo montados e balanceados, aguarde o aviso do professor responsável e tente realizar o login novamente!"
        );
        navigation.navigate("Login");
      } else {
        Alert.alert(
          "Atenção!",
          response.error || "Falha ao candidatar-se ao times."
        );
      }
    } catch (e) {
      Alert.alert("Atenção!", e);
    }
  }
  return (
    <>
      <Container>
        {/* <Gradient /> */}
        <ScrollView>
          <TouchableOpacity
            style={{
              alignItems: "center",
              marginTop: 8,
              flexDirection: "row",
              marginLeft: 16,
            }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons name="arrow-back" size={32} color={"white"} />
            <TextTitle style={{ marginLeft: 16, marginBottom: 0 }}>
              FullStack
            </TextTitle>
          </TouchableOpacity>

          <ImageTop
            source={{
              uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATEhUQEhIVFRUWFRUVEBUVEBAVFRAVFRUXFhUXFRUYHSggGBomGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFRAQFy0dHx8rLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0uLTctKy0uLSsrLSsrLS0rLS0tLS0tLf/AABEIAKYBMAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EAEUQAAICAQMCAwYGAAIFCQkAAAECAAMRBBIhMUEFBhMiUWFxgZEHFDJCobFSwRUjM2JzkrKzwsTR4fDxFiU0NUNydIOi/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAKxEBAQACAQIFAwIHAAAAAAAAAAECETEDIQQFEkFRE2FxIvAUFTKBkaHR/9oADAMBAAIRAxEAPwDxbVahnb4Z4El09aDr1/qVvUA7d4et8JK3NRevKdzFrwRxxKunszwYj2bTgTOvZrfunuuC/E+4yi7knJiE55MSakc8rsQhCVBCEIBCEIBCEIBFESEDa0Go3Lg9R1lmYOmuKtn7zdRgRkQHRDFhiAgiwhAisWVLEPul/EhsBmMo64Z+yk7GRkGWTVk9ZItK/OZdb3UlGJNVWTJH2+4faS11mOThLUmI+IqxZudnHKbplwyJVrPMu4jDSOsmU21hlrtTkMdGBMR2ZqVjKd9w6GI3MXdKwIohmCyjm36mJFfqYkgkpGTGN1ktI4JkUjV4hIQhKyIQhAIQhAIQhAIQhAIRYkAmh4ZqP2H6S35R8DOr1AqJIRRvtI67QQMD4kkD7ntPU9A2nr3UaSksa0d3CqF4qHtZZuWbOBz1JHMK80Bjp31lOj8SRjSuy9VB3FNp5ztDkeywOCOuROBII4IwRwQeoI6gwhITZ8E8CNw9R22Vg4zxlj3xngD4zafy7oyMByD7/WU/weIHGSpZYS2Owmp5g8PfTHaTkNyjDow78diMjj4zBa3ExlfZ16ePvVosBI2vJ4EgrVj1lpa5l1iNV7yzVGqsepgqYGJGbooM1tz9J0IgiypS5iRDCTa6ESLEMLosVY0GOWIljnX6mJH2DmMm3FMoO3rgSGWsALg9fnI6688ngD+ZmVu48IYSdyDz0H7RIJpmiEIQghCEAhFAgYCS34X4bbqLBVUu5jz7goHUsewlSd/5T1Q0miFypvt1F4qTPAGOFDH3fqOO+YDavw0s25bUqG9wrZlz/wDcSD/E5jx/y/fpGAtAKn9DryrfXsfgZ3zeIa4sFF9auzEVp+W2rhN2/eGJYZ9jac8hh74zU6/8zTfpb1BddOdQjqjJgoxwHRiTW3APXlW7ZhWd+FNqpZarfqsrDVjudhO7/nA/QzqPEdZXpa7yamey63eDvsrWuuthZXh1HtE2ZJX3IMzyGvX2LYtqMVZTlCP2/wDn3TvPDfxKTbi/Tktxk1lSrEd9rdPuZB1PlTRhTdeFNaXFHUMCuzhmcc/tDMcHpjE838Q1CvbZYv6Xssde3DOSP4M3PGvOtmprKVp6VZ4fJy7j3E9APeO/vnEX2F246D4wPUNQg/0eQuMDThh7shQ2T9eZqeO+G0+lqTVRTWERGAbw+9XAsKKuzU+say2XHRex44nBeXPM1Yr/ACt5wmCqPzjaeqtjkdTgzfbWaRUAbWF6xylR1RdFxjogOew4ECPz+F/LDPVbF2/Yg/xPPEBPM2fNPj/5pwqAitCSM9Xb/ER2+Al3yt5Ut1Q359OoHG8jJcjqEXvj39PnM11w47sapcSTdOyu8jUOCtOrbeOuRWw+oXBx2zzOP1XhluntNV2Aw5GDkMp6Mp7jg/aT0teuAVH34+kHr75/qODxd016Y5+vJCHjgZTtyGx2kqkzFdp3WwYuZChj8y7ZsKYsTMTMB2YhMbmNLQH7o9TKxaOWzmTa2KniGm2n4H+JQInTX1BgQZg6mgqcH6fGdXnRAdz0lkDgM3T9i++VjZ/HaW6XX9TnnsP8Mi/hHcmeT+o9FHaQW0les0GqJG9Wz9BKeodv0n+8ybWzUV4QkliAd+e/uE0wjhCScAfH+oDTGwmj4H4LdqrPTqXoMux4VB72P+XWBnTuPw/8bpVW0eowFZw9TNwofjjP7TlQQexHvxLI/DM7f/iRu/4J2/fdmcl454DfpbBXav6v0MvKuPgf8jzA9Pp8jaLeHRbFIOQVusGPkc5/mY3m7WaPRad9HpVQWWDbbtO5lXv6jEk5wSACe5nEN4hdWnpLbYPeBa4A+AAOJmkwpJPpKN5+HeRIpJwJpsRUmO5hDNddjCL9ZVc7Rjgk9TzBBwXOfhx3+chJJPxkU+lM9eg6xtj5P9SS04G0fXBjal7+6A+kYBPwntaadVSigf7MUsduThyorxux+oe0xweDmeIi4z0nyj5kovqrovfZdWNiMXK+ovAGG6ZwACD1wD8ppq2akjZTVGwoGC49kJtGChKA+ywfcpz/ALuMd+8xvP8Ap92l01zcvlRnuQ9RZv5UGdU2nVEzbaiVquAV/wBWSoHAawknGMcKRn39p595z8fTUOtVPFNQIXjG9umQOygDA+sW9lwx3XNbT8vlHgN3JirJFWc9121EWyTosCsF4l0bOEIFx8I0uJdM7OzCNUx+ZZGLkQp74bF90CYZmtM7qM1L8R9Y00nscyYxAeZNRZlV4ytrdMGHx7SyYhm3Nzd9eD/chm3r9Nn2h9fjMexMSKm02owCp6GQOeeICKOOe/aQ2VG29uf6jCYGPRe5+koNuBk9e0jk1nx5P9SGCieqeUbE0vhn5jYWJ32OEGWYhyg+QAAye3Jnlc9D/DrzHWqflLWCkEmlmOFbcclCTwDnJHvz9yINB45bqM6retV6WbK9zlaLKSrWGpweAfZOG74HfBnQ+O3pqvCzqdhQhRbWGHKMpwcHuCCwB7gydfJ1RsJ3EaYuLW04UbGtAwDu6hMH9PT6TD/EXzLWazpKWDEkeqVI2oqnIQEcZyBx2AkV5wTnmJNvyh5ebXaj8utgrOxn3FSw9nHGAfjNfxnyLZRatdVn5o4Y2iitmNJUgAWBSSucnrjoZ58vF9HHq/SuWstb/t+eGp08rPVrs5/Q0hRvaV7X3tz/AAZ1HhHljUau5KCr0o6syW2UWbH2jd7B4DZHPBk3iPkF6tLqNT66kUWPWyitsuUcJkHPGd2cTOfjvD4ZzC597r597qf7anSzs3pxlp56cDpH18Anj4ZnX+Vvw/fVaddU+oShXf06gUZi7btnvGMtwOvSM1H4e+IF9QqhH/LkAkFv9ZmsWD0xj2jtI495xM/zDw0zywvUkuPP+dc8cn0s9S65ccFJ7Zj7c4C9cfGaOj8A1j1m9NPayD9y1WFfjggc4/iQ6LwPV3KbKtPbYo/UyVuwH1A5Pwnp+r0+/wCqdvux6b8M/ESdXR5Mtfw869bM4cIKBWxdmNq1AAg9ct0xOc1GjsrYpYrIy43K6srLkAjKnnoRM9LxHT6lymGW7jbL+ZyuWFmtw/S29FCZYnC7RkknoB8Z1Om8n6thub00J6KzEn67QQPvHfhr4erPZecEptWvPYtnJHxwMfUzS0up1Vr3n17FVNSaUWtNPhRlsElyM42+8nmdPTD15OX8a8K1Wmx6iDaeA6+0pPuz2PzEx2vc9Sfvj+p6h5aFmqq1Wn1L+qFtarcUCEjsduODkZHcTzl9JglT1BIPzHEaN28qRMUS2dOInowIFMlRjJBWI4JGl2VHkgeNCxcQbOGY8COTiErJpEBjMcRGgQLdVobkRxmHo9UUYg9M/abatnmaZBmVr9PjnHB/iapjLEBGDA5voYpBPJk+s05U/DtIVBb6TKyHaerJ5k+oZRwOsjC9gZAesnLXeQhiSQrngR40p/75ds6qJV7npH0VbjiJZ1wB0nq3hPhKeH0I+xXvf/aueqZGdqHsB0+MDzbW3XqorzateMBSbFVvoeJnT3jUafUGrddVX6ZIVla1GLZYL+jOW/UO08w89+X101ytUMV2glRz7DD9S/LkEfM+6UaX4N//ADH/APTb/wBWejeXNRp28Q1q00mtlXGoYtn1n9R/bHJx3908f8veI26JvzNZAs2leVDDDYyMH5STwrzjrKdTbqq2QPdn1s1gq2Tuzt7YM+F5h5Z1PEdTq543nGSd7zLvv9tcfd6ul1phjjL8vZPBv9n4X/wP+zCZHmQf+7PEf/ybv+mScA/4ieIlq231E1bvTxUg/Uu05HHaVdT5y1r03UWFRXc7PZioBizMGO09hkCePp+T+InUxzuu1l5+M7l8fFdL4jCyz98O6/Du2xdBXXqa0bSvd6dLK7i2ux7tqgqBwPU5DqwI/ra0GifSp4nWt1rhV9WlntZnr3adj+o85BUDPuUTyjy75z1ujQ1U2IULbglibgrdyvu+8n03nnxCqy231lZ7tvqq9ash2jC7RjAwDjidPEeVeIz6nVuPpkyu9bvfvLxq6up3vuzh18Jjjve49d8qNZ6ejFrBWOlb0qqt+xkAo9uwt1cArjA43v1lbU33U6bSjSorOdVYq1lyiWZ/MlgxB6cbvmonmWi/ETxNErrRqyKxtU+khO3oAT7gAPsMyPQfiHr6VZEdSC7uN1Kt6bWMWYoewyzHBz1nnvkvifVll+m9963dX+r7ff8APPdv+Jw1J3/enr/lQH0H9etEf81aXRTuVbDbuGD39rBz754f5zqtGu1Pqct61hJHcbiVwOw27Zb0nnbXJUahapX1fWJKAu1nqC3JPcFgOPdxMTxzxe3VXNqLdu9tu4qu0HaoUcfICfR8u8v63hvEdTqZ61lvjfzPn/vtHHrdbHPCSezc8geMJRc1dh2rZgBjwFcZ259wOSM/Kdevla0NaVtpZLbTdtt0ws2sc4IO7HG49p5dpdxPXibuk8X1FS7K7rFXsoc4HyB6fSfbeZ3FY/0dVdbdcLbbnLr7IXe5GAAuTwDyT2H8+efM5Pc+8x197u292ZmPVmYsfuZFDWjo0iEIBiKIZhmFBjqhzGgyWpYS8JsRDG7oFpWCxQImYCFUfFNL1cfWJ4ZrP2H6TQB6jtMnX6Yodw6f1A2xAyj4dq9wwev9y8ZUQ6mkMMfaYV1RBIPWdFKmu024ZHUfzFVkUAdTGHrxFYHp94/eoGOZlfZaTaFx3784iW24Xjqe2JVNx7DEtUUDHqOflIuyV/6sbz+o/pE9h1r131JZ7bVsVc+mAX2sD+nPGRnv8Z4pfaWOT9PhN3y35tv0g2ACyvOdjEjaT12t2+XImmXsF/i1V1YrVWZvUQoWoQNUispbc4YnJ2dOBz3nF/iNarGmruu6xvgD7K5+eG/5Mqv+IjuNtWnCt/iewsF+O0AZ+85fxXxBmYs7b3blyTz/AOHygUdbqtx2gAgfORWKMYXHx9oRaqwRuAOewyI0VHPtDH+cm1ktMWonjEkuXoM4x0yCJcorA6Sbb75n1On0vuzEr/cSMe/Of6jSpJzwfr/lNCzSqRjp8pWbRHPbEsyjFwsQqu0c5BPTiNC9g33yI+1eevyyCIioR7R+nI5MrJtvHs/eRxSZNo6tzfASo7nyV5WRqvzWoBK8muvkbgvVmx1GQQB9+s2btf4fsw2kG0dcU1cD3jHP25lrS6sLodPtZUVkWt2Nb2BBtKt7KEYOQeenE55zV6W9NUm/aCKmqZSTsDFS+7A5yvzEiqnmbwRKQl9DbqLP0HO7YcZA3dwQDjPPBBmBO38atX/RaZ4LOu0fEWMx/gN95xOIahIQhCiJFgZAiCW1kdNfeSkSxi0RpWLmLKhvMUCLiKBADG2IGG0xT1hiBiXVtW39Ga+j1IcfHvE1VAcY79pj1u1bfEdfjA6GJI6LgwyP/SSSjN8R0v7h9ZmMJ0pGeJk6nRndgdD/ABJVV9LRuPwHWO1l4Psr+kdPjJdU4RfTXr+4yhAIoGeIk0PD9P8AvP0hHUeRfLa3uzWZFVYBswcFyf0oD2HBJPuHxyPRq101Y2oqIo9MEKigD1W2oT8z75yX4fWrdRqtOrAMSfotlewH6EH7iXaPElLAWW1UalaxTq6dSMU6hVzhlJPTliCM8MQQeJFWPN/lGp6mvorCWoCzKqgC4DlgVHG7GSD36H4easoM9l0WrrTTvaTX6YVmzWD6e0LztY/r92enYTxyoeyB8BM11wquaSOkVLuxlniR21g9Zl02MiJITT7jFrBkXSRqweokF+kyOOJZzBjLtmyVjPWR1E0tEgA7ZnqXkryhVtrsuVWtfDAWYKUqeRweMgcknp2noWo8oac6cnUqpwGLBVRlOCcbMgEEjHyJ6zpHCyTh4f5d8xNps1su+psllz7Sk8Epnjnup6+8c51rfGfCtu70HJ/w7SD9Tvx/MyvOHgY0to2Z9KwE156qR1Qn6jHz+GZhQi74v4kbioChK0yKqwSQgJySSf1MT3lAiOhKGYhiOhiRdmwA5i4kunTmDaXHGIhjjEmmTSIR2ImJACKDCKBKGNAGAOYmOZAsqa/S7huHUfzLcIGJpNQUPw7ibqOCMiZfiOl/ev1Ej8P1e07T0P8AEDZlbW6kKPj2kttoAyekwtRcWOT9JaI2bJyYkkppLHAkh0b+7+ZAmko3H4d5d19hUbR9Y7ipPj/ZmaCSc5+JhVzwXxO3TWC+psMOMEZVweqsO4OJ6NpfP+nsUNdpWLDpj0rFHyL4I+08vsuyeR0mvRjaMe6ZreEldD5n80WatfSC+lVkEqG3M+DkbzjoODtH3Ml8n+WkdH1d+WpTOysHHqFOWJOeg6Yzyc9hzz2J6h5SKv4cFXslyMPc25z/ADuB+skat1NRbprravA8Nt9PaDzo0CFSM5B6EY7zjPN3l+tKl1mnUrU+N9ZOfT3H2WHJ9knjGeMjt07vw3xqoaT0zbRs/L8qv5lNQb/TIVXGcMu7HJO3rwJkeaGFfhhVu9dSKP8AeO3H9E/SWsY3u8tYTpfDPI+osT1LXWhcZAZSz497LkBePec/ASr5L0i26ytW5C7rMHuUGV//AKwfpO7846hlrRB0dju+IUZx98faZkdMsrOHHeLeStRShsRluUDLbVKuB7wuTuGPcc/Ccyx49/8AnPVvJWqZ6Cp/+m+1T/ukBgPpkzgfNukWrV3IvCkhwP8ADvUMR8skxZowy3y9i8v6utjXZ1R0BTBHO4DaMn7fObXiPhtddTuLGbcV9NNqhKdvVV2qDjJ/eTjAxPCvAvMr0L6Tr6lQOVG7a1Z5zsPu5zg/cTpdX+JINQqWu5sEECxq1BI6bmUkkTW4xcLtD+J9y7KK/wB29n+IULt/th9pwKmWfFNfZfYbrTljxxwFA6Ko7ASmZi3u6zHtpNAiRo8lxOku3HLHVNxCLAysmmWKTgSASdRxCHQhDEoIhEXEICYirCKIEZETMeY3EgFaITCEBomTrtNtOR0P8TViOgIwYGK97EBSeBGKpJwJJqKSpwfp8Za8PqH6vtAs6eoKMfeS/EwkeoQsuAcQqhqtSWOMcdo1yuMDg9+8f+TZeevuAlVs94ChCenMtUasp7PWVl45+0aJCXXDXq1oPYzf8s+ZrNKxKgMjY9SskjOOhU/tb49/tjC01IAEeyTG3f0y8vSv/brRf7T0Ld//AA6M/wDL39JyHmbzBbq2G4BK1JNdYOcH/Ex7tj7ffOJ6hHWPDRtJjpa8G8QOnvrvAztPtAfuUgqw+eCfqBPUrq6NbSClgK5DK46oe4ZexwSCDPIsR9Vroco7Ie5R2Un6qYl0ZY7er0V0aDT+3ZwCSzHg2seyr3OAAB8J5b4trWvusvIwXbIH+EAAKPooAle652OXZmPvZmY/cmNi3a446EDEhmRohjCI8xpkUySVWdpExjAZZdJljuL0MRlb5EfOrzWaCrJoxBHyxBCIYogEIQlBFESKIDTEhCZAYxoQgIBFCwhAZZUGGCMxtdIUYEIQFIhCEKI1kB6gGEIFfUaUHpxKT0kHrCEi6a2lfKiSwhMOxGWMAiwkU+IRCEqExAiJCRSRpiwkU3MaTEhCmMYwwhCnVviXAYQm8XLqxKkdCE6OBDEiwgGYsIQEiqYQgf/Z+semC+YRxlyx+KYeqsJyO1+I4diOV2IpPT+mmoWoj+Wj+mHqrCcjtfiOHYjf2Ifn7TvvK/2kf0w9VYTkdr8Rw7Eb+xET+mtMUlSVKVZKSFejQNkgg1s0o8ZQyZhYSUow1rWtb4viRLGV5JpvV0I40bxpn0b9mP8ACP8APH5ZceI9Iv5lQ6I/3M9XkT+EqdL7j65Np2ObVjuGsUQLNGttzfHnAClV/icrVOLQBLl8bD8m8IAqbRtXzs14P74AYAs4W25v4wBMqvb5PSAEol6PY9zYwBU1h2L8WrADQA201rO98PhAEynPbuzpWAFMKn2Hs4NdADEvV7TvhAAZes2rsPnvgBmbb2WbPhAAF6ul+Pz3QAtVZ23fLj9YACnWVuakAPWWtjk/D6QAA6ul7wAtW22+bcYAUxOtuJS3N4wnFyWp2JTsKatJAlqA3AneMRGWkUGtdm9hi45yPNdaOq65tkomgMCyFA2XxNoPW4XYRu0sUo/eRq1cM5fdZw9B6HnaOTrUsFNZIUkhTO7MXF4va+PLel1WM1Rzf93+J1sh0pQdTO931Pmuldtf+ZX5jHtKP4Uehdx5Wr+JLpfeKVOUnslniwwTaKX0ksXrPugZZzNdfS03BZHd4QGcyfOs71h7h4QGczLZ0idKWsm1LlsVElAY1ZnYk30EUzrwhOMJPW9mosjTnODktiDozpAS0qCzMuNgIKALRxWVAlrroVVVdtG0teu+vV7hSlBJ59/dY2ugesEyVPlrWslDssU7JoTdhfyinH4bhGHlDj2rpWzwLMLXdOqpPZxm/wBbutKps2xJU0pFAR9tWKq4YDvxjUyTk/g9PPn999i3ePVxF+Oxeklmx2LtOD51nesPcPCOuaGcw86zvWHuHhAZzMGkaSpZBWpyKC74QIbbMsvpGakABZAFAKeECc5ledZ3rD3DwgM5kr6SmkEFZYgg0FxvwgM5mrAxPov7Mh6I/wA8fllx4f0i/mVDoj/cz1eRP4Sp0vuPrwOrpe8d01hattt824wAz6TJvj9IANb9jk8AA9Hm/wAPrAC1T7b5twgBk6zJoANY2xyfj9YAQTq63vSADV2tt2xbh9IAZXrKXNWAATrGyztjxgCZZJLLds6QATSQdi7KtYAuYAA6e1lU50gBSgCNu/OlPl4AlBJLKeznQZVgBzSR2LsWrWAKUAzjte98ad8AKVXt8npAEgl2L2H5NhWAHNp2ObV4QA1ISUuQCq/O1w3xEoqW1XFzGQpQqQCGa0KG9xeMoxqKbX2HZ+9X8CVbjOP1lvljDabhs3b4856RJPRXdvvfQ6WTW1n2V9n1PhumFImqTaH8RQtF27R2jRwMbo93RbVGLt/pWr4Hj6kb1ZL3vvNbpDYWUJmIWA21LJKS4wKgD7ozpTdSOc4te57exsicMyVrp9BGmyZabOrnaxw6thSbJ3bXa4xjSnUlfPhm7tad/fq2GVSEI2zZX+FgnKk6tISlesfbUVJsNVglID7qk74RVXSNyazeJJa/iyJaPMWanfj3AnTlCUZQCLJVaJsJtlmYW2dg1w3nfB0Iuoqjvdatrt1bAqslDM1W6NfWasXFYQAQAQAQAQAQAQAQAQAQB9G/Zl/CP88fllx4b0j/AJlQ6I/3M9VkT+EqdL7j69Kr2+T0jumsSCXYvYfk2FYAc2jWObV4QBTBn+23N+EATKq9vk9OPwgBEl2rYfk3GAKm07HNqwAwAznt+98KQBMqvbuwekAJRILJezlc2Ne+AKmgDsX4tWkAOWlJDra1nQwAlTLeyKYwAJmavZNcaQAhKsbRr+sACkayophX5zgBmba2Pfw+kACVauhq9aQAhLsm3he3H6wAKGsqKNvgB6xxYxufhAAk6u+r7soAWrrbwvaAGr0l1G35/SAOH1nNJY+7aH5fCPMekkXak/8Al9Dq5L2y+H1PNnRJfq0eynwjzvC8RzkutnS0FPkrqDyOX6tHsp8InhmI5yXWxoKfJXUHkcv1aPZT4Q4ZiOcl1saCnyV1B5HL9Wj2U+EOGYjnJdbGgp8ldQeRy/Vo9lPhDhmI5yXWxoKfJXUHkcv1aPZT4Q4ZiOcl1saCnyV1B5HL9Wj2U+EOGYjnJdbGgp8ldQeRy/Vo9lPhDhmI5yXWxoKfJXUHkcv1aPZT4Q4ZiOcl1saCnyV1B5HL9Wj2U+EOGYjnJdbGgp8ldQeRy/Vo9lPhDhmI5yXWxoKfJXUHkcv1aPZT4Q4ZiOcl1saCnyV1B5HL9Wj2U+EOGYjnJdbGgp8ldQeRy/Vo9lPhDhmI5yXWxoKfJXUHkcv1aPZT4Q4ZiOcl1saCnyV1GLVSmfVC4n+HgMmvyvjb/wD152bpeNR+/v1327N7Kf8Aw2vmcV/u+W33G9oEtKVospA2klgAMRFGHqVJ4mnntt5y2u/GWTjGNKWaran3Ht1DWVFG3x9EPNBrHFjG5+EACfR31fdl9YAWqrbwvaAGr0l1G35/SADWMLGNz8YASRq76vugAMtzbwvbh9IAalaygo2+AATLOxjc/H6wAko1dTV6UgAMm3tCj/CAKmpCQ6L8qwASkhQdd+dKQBEtRJZXZ7vfABNJSWRdlWsAWtIAdPa7+NIAUoBXbvzpSAJSok2T2fhhXugBzdnsc2rAFFIs2h2mfnjSAFK2u3hc9IAm0Xs/Zu5cYAc3Zaxje1eHxgDHpehomSyFdq93qDwjWxeFp4mno6mzuLaNaVKWdE40vq87+kbin9Y4D9G91T5fM6Kyp/s7fIR6vl21lN9mn4w9m/zfl8yfWn+zt8ipvV1rpr8E/wDqHs3+b8vmPWi5Hb5Anq5R9aAd1n/1D2b/ADfl8x60XI7fImV1eJvmNxT+sPZv835fMetFyO3yJndBWXJmiyA5VZoAA5JL3CHs1+Z8vmR60XJ7fI+cTuvcsKUEyVKSCQlVqzaD0VZajirYRt+x8ue+X/saL9Io3+52+RH7+p/u59sf0w9jpc98v/Yj2ijzfb5B+/qf7ufbH9MPY6XPfL/2HtFHm+3yD9/U/wB3Ptj+mHsdLnvl/wCw9oo832+R6zqfpKNPlLWlVhaFAKlkWixGyoEEULEXXpMU1fRV03rq/L5mzRy1GqrqHb5HopfV1xWaBxT/AOoq9m/zfl8y/wBaLkdvkSjq+SW1jZ2f1h7N/m/L5j1p/s7fIJvV4g0mPwT+sPZv835fMetFyO3yKX1cYPrQcrP/AKh7N/m/L5j1ouR2+QSurr3zW4p/9Q9m/wA35fMetFyO3yNjo7odKFgqJUztRhxjewORaeGqaSUs5rZqsl36zXxGOlVjmpWR1Juz2ObVjtGgUUizaHaZ+eNIAUra7eFz04wBNovZ+y7ZNxgCpuz2Mb2rw+MAMJFm19pn58IAmVtdvk9IASlEGyOzdk2NYAqaLPYvxasANCQRaPa+Wp3QBMolVF3Z0rACmLUksm7g/vgBol2No1wpAAuXrNoUwrADVNCxZF+eUACF6uhrjT5ygBJl2TbN3vr9YAFp1lRRqVgBmZaFjG7Kn0gAQdXQ1fdACEtjbwvzrAAsay6jb84AespYxufCAOfP6a0fR1lEyakKo4DkjiwpfFkaM5K6RXKrCLs2ap6y6Jata9N7sy3/AAjLg9TcY6envKn9aNEU3p0ht4X8BDg9TcNPT3lJ61aIE2dcLmdlN+EOD1Nw09PeRI6zaIl/TpL7gv4iHB6m4aenvEvrLohVa16cKMt6cocHqbhp6e8uf1p0RQbXgcQv4CHB6m4aenvPK/tC6yW9E8m0RVszCRMUKBMsVKdpqqJA4BW8Rfh6ElLOkjXxNdOGbB7T5V5pnfc96fGN45uaw80zvue9PjAZrDzTO+570+MBmsPNM77nvT4wGazv9SNKn6FpaJpQdWdiaAU1Qohyz1KSyhwbGKq1PPjYvw83TnfiPr0/rLoii+vSMKhfwEc/g9TcdPT095c3rVoig2uA4hXhDg9TcNPT3ikdadESG1wNXoF/EQ4PU3DT095EvrJogVa16TfRl48ocHqbhp6e8c/rNoii+vSOIX8BDg9TcNPT3lr61aIU2dcOLKanKHB6m4aenvFI60aIl/TpL7gv4iHB6m4aenvOnJZQE1KgpB2gQXcHdhFTTTsy1NNXRa/SXUbfn9IgkespYxufCABHo76vuy+sALVubeF+dIAazrLqNvgAExhYxufCv1gBITq6mr7oADLtG2Lr86fSAGtWsoKNWsANM4IFkuSN2cARLWVFlXd0AE1RSWTd31gC5iAkOm/vgAlJCg677t1IAhCyTZPZ8LqwA5ps0Rd3wBSkAC0O1430gBShb7eF2EASFkmyey7chdWAHN2GsY34wBVgNa+0z8+EAc0dBaNMUpcySkrJcqJVUnnFqrzSsmVOjBu7RP7u6E7eTjjtN+MTwipvI0FPcOZ1b0If2dJ4WvGHCKm8aCnuGOrWhM/k6eDqf8YcIqbxoKe4mX1c0I/2dI42vGHCKm8aCnuBXVzQgW8nH/JvxhwipvGgp7hzOrWhD+zpPC14w4RU3jQU9w09WtCIfydPep/xhwipvGgp7iZfVzQj/ZwONrxhwipvGgp7gX1d0IFvJweFrxhwipvGgp7ipnVrQgP/AJ0ngVeMOEVN40FPcEvq1oRD+TpHEq8YcIqbxoKe4lHV3QiW8nA42vGHCKm8aCnuCZ1c0IH/AOcHha8YcIqbxoKe4pfVrQgH8nTyKvGHCKm8aCnuFL6taEf7OkcbXjDhFTeNBT3CT1d0IlvJx/yb8YcIqbxoKe4JnVzQh/Z0nha8YcIqbxoKe4o9WtCZ/J096n/GHCKm8aCnuFL6t6Ef7OkcbQ+MOEVN40FPcbWhyEywJSE2ZYJZIdg5JNTvLnnFcpOTuyyMVFWRnm7DWMb8YxMirAa19pn58IAUrbe3hdhxgCSsvZ+y7cuMAVNFjsY34wAwgEWj2r+YupAEyjbovDlACUsg2R2fG+sAVNSEh0X98AOXLCg6r+6AP//Z",
            }}
          />

          <View style={{ padding: 16 }}>
            <SubTitle>
              O profissional fullstack é responsável pelo desenvolvimento
              completo de sites, aplicativos e softwares, cobrindo tanto o
              front- end quanto o back- end. Eles utilizam uma variedade de
              tecnologias, incluindo HTML, CSS, JavaScript e linguagens de
              programação como Python, Java ou JavaScript (Node.js), para criar
              interfaces de usuário intuitivas e funcionais, além de desenvolver
              a lógica do sistema. Colaboram com equipes para garantir a
              integração perfeita entre todas as partes do aplicativo e realizam
              testes abrangentes para garantir a qualidade e o desempenho do
              produto.
            </SubTitle>

            <TextTitle>Requisitos mínimos:</TextTitle>

            <View
              style={{
                paddingBottom: 12,
                paddingHorizontal: 12,
                marginBottom: 8,
              }}
            >
              <TextOptions>
                º Conhecimento em desenvolvimento front end e back end
              </TextOptions>
              <TextOptions>
                º Habilidade em tecnologias como HTML, CSS, JavaScript e
                linguagens de programação (ex: Python, Java, Node.js)
              </TextOptions>
              <TextOptions>
                º Capacidade de integração entre o front end e back end
              </TextOptions>
              <TextOptions>
                º Experiência em testes abrangentes para garantir usabilidade e
                desempenho
              </TextOptions>
              <TextOptions>
                º Habilidades em design e desenvolvimento de interfaces de
                usuário intuitivas
              </TextOptions>
              <TextOptions>º Boa comunicação e trabalho em equipe</TextOptions>
            </View>

            <CustomDropDown
              placeholder={"Selecione"}
              setSelected={setSelectedLocal}
            />

            <TextTitle>Possui mais alguma habilidade?</TextTitle>
            <Input placeholder="Descreva-as" multiline={true} />

            <PrimaryButton
              title={"Me candidatar"}
              fn={() => candidatarUsuario()}
            />
          </View>
        </ScrollView>
      </Container>
    </>
  );
}

export default DetailsFullStack;
