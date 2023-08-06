import Header from "./components/header/Header";
import Choose from "./components/mainpage/choose/Choose";
import Features from "./components/mainpage/features/Features";
import Exchange from "./components/mainpage/exchange/Exchange";
import World from "./components/mainpage/world/World";
import News from "./components/mainpage/news/News";

(async () => {
	Header.show()
    Choose.show()
    Features.show()
    World.show()
    await News.show()
    await Exchange.show()
	setInterval(Exchange.show, 900000)
})()