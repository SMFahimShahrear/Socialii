//SIDEBAR
const menuItems = document.querySelectorAll('.menu_item');

//MESSAGES
const messageNotification = document.querySelector('#message_notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message_search');

//THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize_theme');
const fontSizes = document.querySelectorAll('.choose_size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose_color span');
const Bg1 = document.querySelector('.bg_1');
const Bg2 = document.querySelector('.bg_2');
const Bg3 = document.querySelector('.bg_3');

//------------------SIDEBAR---------------------------//

//remove active class from all menu items
const changeActiveItem = () =>
{
    menuItems.forEach(item => 
        {
            item.classList.remove('active');
        })
}

menuItems.forEach(item =>
    {
        item.addEventListener('click', () =>
        {
            changeActiveItem();
            item.classList.add('active');
            if(item.id != 'notification')
            {
                document.querySelector('.notification_popup').
                style.display = 'none';
            }
            else
            {
                document.querySelector('.notification_popup').
                style.display = 'block';
                document.querySelector('#notification .notification_count').
                style.display = 'none';
            }
        })
    })

    //-----------------------MESSAGES---------------------------------------------

    //Searchs chats
    const searchMessage = () =>
    {
        const val = messageSearch.value.toLowerCase();
        message.forEach(chat =>
            {
                let name = chat.querySelectorAll('h5').textContent.toLowerCase;
                if(name.indexOf(val) != -1)
                {
                    chat.style.display = 'flex';
                }
                else
                {
                    chat.style.display = 'none';
                }
            })
    }

    //Search chat
    messageSearch.addEventListener('keyup', searchMessage);

    //----------Highlight meassage box when message icon is clicked
    messageNotification.addEventListener('click', () =>
    {
        messages.style.boxShadow = '0 0 1rem var(--color_primary)';
        messageNotification.querySelector('.notification_count').
                style.display = 'none';
        setTimeout(() =>
        {
            messages.style.boxShadow ='none' 
        }, 2000);
    })

    //THEME CUSTOMIZATION


    //Opens Modal
    const openThemeModal = () =>
    {
        themeModal.style.display ='grid';
    }

    //Closes Modals
    const closeThemeModal = (e) =>
    {
        if(e.target.classList.contains('customize_theme'))
        {
        themeModal.style.display = 'none';
        }
    }

        //Close Modal
    themeModal.addEventListener('click', closeThemeModal)

    theme.addEventListener('click', openThemeModal);

    
    //-------------------------------FONTS----------------------------------------

    //remove active class from font size selector
    const removeSizeSelector = () =>
    {
        fontSizes.forEach(size => 
            {
                size.classList.remove('active');
            })
    }

    fontSizes.forEach(size => 
    {
        size.addEventListener('click', () =>
        {
            removeSizeSelector();
            let fontSize; 
            size.classList.toggle('active');

            if(size.classList.contains('font_size_1'))
            {
                fontSize = '10px';
                root.style.setProperty('----sticky_top_left', '5.4rem');
                root.style.setProperty('----sticky_top_right', '5.4rem');
            }
            else if(size.classList.contains('font_size_2'))
            {
                fontSize = '13px';
                root.style.setProperty('--sticky_top_left', '5.4rem');
                root.style.setProperty('--sticky_top_right', '-7rem');
            }
            else if(size.classList.contains('font_size_3'))
            {
                fontSize = '16px';
                root.style.setProperty('--sticky_top_left', '-2rem');
                root.style.setProperty('--sticky_top_right', '-17rem');
            }
            else if(size.classList.contains('font_size_4'))
            {
                fontSize = '19px';
                root.style.setProperty('----sticky_top_left', '-5rem');
                root.style.setProperty('----sticky_top_right', '-25rem');
            }
            else if(size.classList.contains('font_size_5'))
            {
                fontSize = '22px';
                root.style.setProperty('--sticky_top_left', '-12rem');
                root.style.setProperty('--sticky_top_right', '-35rem');
            }

                //change font size of the root html 
                document.querySelector('html').style.fontSize = fontSize; //Since we used 'rem'
        })
        
    })



const changeActiveColorClass = () =>
{
    colorPalette.forEach(colorPicker =>
        {
            colorPicker.classList.remove('active');
        })
}
    
//Change Primary Colors
colorPalette.forEach(color =>
    {
        color.addEventListener('click', () =>
        {
            let primary;
            //remove active for color spans
            changeActiveColorClass();

            if(color.classList.contains('color_1'))
            {
                primaryHue = 252;
            }
            else if(color.classList.contains('color_2'))
            {
                primaryHue = 52;
            }
            else if(color.classList.contains('color_3'))
            {
                primaryHue = 352;
            }
            else if(color.classList.contains('color_4'))
            {
                primaryHue = 152;
            }
            else if(color.classList.contains('color_5'))
            {
                primaryHue = 202;
            }
            color.classList.add('active');

            root.style.setProperty('--primary_color_hue', primaryHue);
        })
    })

    //Theme Background Values
    let lightColorLightness;
    let whiteColorLightness;
    let darkColorLightness;

    //change background color
    const changeBG = () =>
    {
        root.style.setProperty('--light_color_lightness', lightColorLightness);
        root.style.setProperty(' --white_color_lightness', whiteColorLightness);
        root.style.setProperty('--dark_color_lightness', darkColorLightness);
    }

    Bg1.addEventListener('click', () => 
    {
        //add active class
        Bg1.classList.add('active');
        //remove active class from others
        Bg2.classList.remove('active');
        Bg3.classList.remove('active');
        //remove customize changes
        window.location.reload();
    })
    
    Bg2.addEventListener('click', () => 
    {
        darkColorLightness= '95%';
        whiteColorLightness= '20%';
        lightColorLightness= '15%';

        //add active class
        Bg2.classList.add('active');
        //remove active class from others
        Bg1.classList.remove('active');
        Bg3.classList.remove('active');
        changeBG();
    })

    Bg3.addEventListener('click', () => 
    {
        darkColorLightness= '95%';
        whiteColorLightness= '10%';
        lightColorLightness= '0%';
        //add active class
        Bg3.classList.add('active');
        //remove active class from others
        Bg1.classList.remove('active');
        Bg2.classList.remove('active');
        changeBG();
    })