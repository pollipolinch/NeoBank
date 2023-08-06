import Header from "./components/header/Header";
import Choose from "./components/mainpage/choose/Choose";
import Features from "./components/mainpage/features/Features";
import Exchange from "./components/mainpage/exchange/Exchange";

(async () => {
	Header.show()
    Choose.show()
    Features.show()
    await Exchange.show()
	setInterval(Exchange.show, 900000)
})()