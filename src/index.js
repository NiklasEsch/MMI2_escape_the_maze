// set if Player is in VR (true)
let showSmartphoneView = false

const set_smartphoneMode = () => {
    showSmartphoneView = true
    console.log(showSmartphoneView)
}

const set_vrMode = () => {
    showSmartphoneView = false
    console.log(showSmartphoneView)
}

const setPlayerModeScene = () => {
    var VR_Div = document.getElementById("VR_Div");
    var VR_Div = document.getElementById("SMARTPHONE_Div");
    if (showSmartphoneView) {
        VR_Div.style.display = 'none';
        SMARTPHONE_Div.style.display = 'block';
    }
    else 
    {
        VR_Div.style.display = 'block';
        SMARTPHONE_Div.style.display = 'none';
    }
}

