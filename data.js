const DATA = [
    {
        "name": "אורה נמיר",
        "img": "http://fs.knesset.gov.il/globaldocs/MK/158/1_158_3_406.jpeg",
        "gender": "F",
        "alive": 0
    },
    {
        "name": "ראומה ויצמן",
        "img": "https://upload.wikimedia.org/wikipedia/commons/c/c5/929_-_Bible_together_%28cropped%29.jpg",
        "gender": "F",
        "alive": 1
    },
    {
        "name": "ספי ריבלין",
        "img": "https://upload.wikimedia.org/wikipedia/commons/1/1c/%D7%97%D7%99%D7%AA%D7%95%D7%9A_%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A1%D7%A4%D7%99_%D7%A8%D7%99%D7%91%D7%9C%D7%99%D7%9F.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "יצחק קלפטר",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/%D7%99%D7%A6%D7%97%D7%A7_%D7%A7%D7%9C%D7%A4%D7%98%D7%A8.JPG/400px-%D7%99%D7%A6%D7%97%D7%A7_%D7%A7%D7%9C%D7%A4%D7%98%D7%A8.JPG",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "דודו דותן",
        "img": "https://img.wcdn.co.il/f_auto,w_300/1/1/3/9/1139734-46.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "רות דיין",
        "img": "http://images1.ynet.co.il/xnet//PicServer2/pic/052013/372453/6_36.jpg",
        "gender": "F",
        "alive": 0
    },
    {
        "name": "אהרן פררה",
        "img": "https://upload.wikimedia.org/wikipedia/commons/2/21/%D7%90%D7%94%D7%A8%D7%95%D7%9F_%D7%A4%D7%A8%D7%A8%D7%94.jpeg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "שמואל פלאטו-שרון",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Plato_sharon.jpg/800px-Plato_sharon.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "גבי עמרני",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Gabi_Amrani.jpg/500px-Gabi_Amrani.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "דודו טופז",
        "img": "https://img.wcdn.co.il/f_auto,w_300/3/3/7/5/337567-46.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "שמוליק סגל",
        "img": "http://stereo-ve-mono.com/sleeves/02/0207501a.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "דב רייזר",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Dov_Reiser.JPG/250px-Dov_Reiser.JPG",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "חנה מרון",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hanna_Maron_in_the_kitchen_-_Krovim_Krovim.jpg/500px-Hanna_Maron_in_the_kitchen_-_Krovim_Krovim.jpg",
        "gender": "F",
        "alive": 0
    },
    {
        "name": "ישראל גוריון",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Israel_Gurion.jpg/440px-Israel_Gurion.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "חיים גורי",
        "img": "https://upload.wikimedia.org/wikipedia/commons/b/bd/ChaimGuri.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "חיים חפר",
        "img": "https://www.makorrishon.co.il/nrg/images/archive/300x225/1/100/162.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "יעקב בודו",
        "img": "https://img.wcdn.co.il/f_auto,w_700/2/6/6/0/2660671-46.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "דניאל פרידמן",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Daniel_Friedmann2012-1.jpg/400px-Daniel_Friedmann2012-1.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "מאיר שמגר",
        "img": "http://images1.ynet.co.il//PicServer4/2016/08/10/7191729/8222933_8327943_rumble.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "יונה עטרי",
        "img": "http://www.zemereshet.co.il/AdjustImage.aspx?MaxWidth=374&MaxHeight=374&src=UserFiles/Image/artists/yona_atari/yona1.jpg",
        "gender": "F",
        "alive": 0
    },
    {
        "name": "אילי גורליצקי",
        "img": "http://www.habama.co.il/Habama/Upload/Archive2009/%D7%90%D7%99%D7%9C%D7%99-%D7%92%D7%95%D7%A8%D7%9C%D7%99%D7%A6%D7%A7%D7%99-%D7%91%D7%90%D7%93%D7%99%D7%91%D7%95%D7%AA-%D7%94%D7%9E%D7%A9%D7%A4%D7%97%D7%94.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "אלי גורנשטיין",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Eli_Gorenstein_-_Sinatra_018.jpg/500px-Eli_Gorenstein_-_Sinatra_018.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "תיקי דיין",
        "img": "https://upload.wikimedia.org/wikipedia/commons/7/74/TikiDayan.jpg",
        "gender": "F",
        "alive": 1
    },
    {
        "name": "אורנה פורת",
        "img": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Orna_porat.jpg",
        "gender": "F",
        "alive": 0
    },
    {
        "name": "קארן דונסקי",
        "img": "http://img.mako.co.il/2016/01/20/Anashim_vod_WIDE_i.jpg",
        "gender": "F",
        "alive": 1
    },
    {
        "name": "פינצ'י מור",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PinchiMor.jpg/440px-PinchiMor.jpg",
        "gender": "F",
        "alive": 0
    },
    {
        "name": "ציפי מור",
        "img": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Zipi_Mor.jpg",
        "gender": "F",
        "alive": 1
    },
    {
        "name": "אברהם מור",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/%D7%90%D7%91%D7%A8%D7%94%D7%9D_%D7%9E%D7%95%D7%A8.jpg/500px-%D7%90%D7%91%D7%A8%D7%94%D7%9D_%D7%9E%D7%95%D7%A8.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "שושיק שני",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Shoshik_Shani.JPG/1920px-Shoshik_Shani.JPG",
        "gender": "F",
        "alive": 1
    },
    {
        "name": "אריק לביא",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flickr_-_Government_Press_Office_%28GPO%29_-_SINGER_ARIK_LAVI_AT_THE_TELETROM_DONATIONS_EVENING.jpg/500px-Flickr_-_Government_Press_Office_%28GPO%29_-_SINGER_ARIK_LAVI_AT_THE_TELETROM_DONATIONS_EVENING.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "סילבי קשת",
        "img": "https://velvetundergroundblog.files.wordpress.com/2012/08/sylvie2012.jpg",
        "gender": "F",
        "alive": 1
    },
    {
        "name": "שולמית לפיד",
        "img": "https://library.osu.edu/projects/hebrew-lexicon/00458_files/image001.jpg",
        "gender": "F",
        "alive": 1
    },
    {
        "name": "זובין מהטה",
        "img": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Zubin_Mehta_1.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "יענקל'ה בן סירא",
        "img": "https://upload.wikimedia.org/wikipedia/commons/d/da/%D7%99%D7%A2%D7%A0%D7%A7%D7%9C%D7%94_%D7%91%D7%9F_%D7%A1%D7%99%D7%A8%D7%90_%D7%A4%D7%95%D7%A8%D7%98%D7%A8%D7%98.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "שלומית אהרון",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Shlomit_Aharon1.jpg/800px-Shlomit_Aharon1.jpg",
        "gender": "F",
        "alive": 1
    },
    {
        "name": "אולסי פרי",
        "img": "https://upload.wikimedia.org/wikipedia/commons/4/48/PikiWiki_Israel_11155_Events_in_Israel_Aulcie_Perry.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "טל ברודי",
        "img": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Tal_Brody_%2819351049266%29_%28cropped%29.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "אבי טולדנו",
        "img": "http://www.news1.co.il/uploadimages/NEWS1-736797511577607.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "דניאל רוגוב",
        "img": "https://upload.wikimedia.org/wikipedia/commons/a/a8/ROGOV.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "רות סירקיס",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/%D7%A8%D7%95%D7%AA_%D7%A1%D7%99%D7%A8%D7%A7%D7%99%D7%A1.JPG/800px-%D7%A8%D7%95%D7%AA_%D7%A1%D7%99%D7%A8%D7%A7%D7%99%D7%A1.JPG",
        "gender": "F",
        "alive": 1
    },
    {
        "name": "רות וסטהיימר",
        "img": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Dr._Ruth_Westheimer_by_David_Shankbone.jpg",
        "gender": "F",
        "alive": 1
    },
    {
        "name": "גדי יגיל",
        "img": "https://upload.wikimedia.org/wikipedia/commons/0/05/Gadi_Yagil_1.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "מוטי גלעדי",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Moti_Giladi.JPG/800px-Moti_Giladi.JPG",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "שמוליק עצמון",
        "img": "https://upload.wikimedia.org/wikipedia/commons/9/99/Shmulik_Atzmon-Wircer.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "יעקב אגמון",
        "img": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Yankale_agmon11.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "ישראל קיסר",
        "img": "https://upload.wikimedia.org/wikipedia/he/1/1d/NACHUM3_-_Yisrael_Kessar.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "יהודה קיסר",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/%D7%99%D7%94%D7%95%D7%93%D7%94_%D7%A7%D7%99%D7%A1%D7%A8.jpg/1280px-%D7%99%D7%94%D7%95%D7%93%D7%94_%D7%A7%D7%99%D7%A1%D7%A8.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "שמרית אור",
        "img": "https://upload.wikimedia.org/wikipedia/he/5/54/Shimrit.orr.jpg",
        "gender": "F",
        "alive": 1
    },
    {
        "name": "מירית שם-אור",
        "img": "http://img.mako.co.il/2009/03/08/mirit_b.jpg",
        "gender": "F",
        "alive": 1
    },
    {
        "name": "אילנית",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/2016_Wigstock_186.jpg/1920px-2016_Wigstock_186.jpg",
        "gender": "F",
        "alive": 1
    },
    {
        "name": "יוסף כרמון",
        "img": "http://images1.ynet.co.il//PicServer2/04062007/1164665/w.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "זלמן שושי",
        "img": "https://upload.wikimedia.org/wikipedia/he/thumb/6/68/Zalman_ST_09.jpg/500px-Zalman_ST_09.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "מאיר ויזלטיר",
        "img": "http://www.habama.co.il/Habama/Upload/other/%D7%9E%D7%90%D7%99%D7%A8-%D7%95%D7%99%D7%96%D7%9C%D7%98%D7%99%D7%A8.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "מני פאר",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Meni_Peer1_2.jpg/800px-Meni_Peer1_2.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "אהרן ברק",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Aharon_Barak.jpg/500px-Aharon_Barak.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "אלי דנקר",
        "img": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzMDk2NTQyN15BMl5BanBnXkFtZTYwNTI4MzAz._V1_UY317_CR20,0,214,317_AL_.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "אברום בורג",
        "img": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Avraham_Burg_by_David_Shankbone.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "מיכל בת אדם",
        "img": "http://www.cinemaofisrael.co.il/wp-content/uploads/2015/10/michal.jpg",
        "gender": "F",
        "alive": 1
    },
    {
        "name": "אילן דר",
        "img": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Illan_dar.JPG",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "אריקה לנדאו",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Dr._Erika_Landau.JPG/1024px-Dr._Erika_Landau.JPG",
        "gender": "F",
        "alive": 0
    },
    {
        "name": "רמה מסינגר",
        "img": "http://www.habama.co.il/Upload/MediaFiles/%D7%A8%D7%9E%D7%94-%D7%9E%D7%A1%D7%99%D7%A0%D7%92%D7%A8-1.gif",
        "gender": "F",
        "alive": 0
    },
    {
        "name": "רבקה מיכאלי",
        "img": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Rivka_Michaeli.jpg",
        "gender": "F",
        "alive": 1
    },
    {
        "name": "אסי דיין",
        "img": "https://upload.wikimedia.org/wikipedia/commons/5/50/%D7%90%D7%A1%D7%99_%D7%93%D7%99%D7%99%D7%9F_Assi_Dayan_2012.JPG",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "מוסקו אלקלעי",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Mosko_Alkalai.jpg/800px-Mosko_Alkalai.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "שאול אברון",
        "img": "https://upload.wikimedia.org/wikipedia/commons/8/8a/%D7%A9%D7%90%D7%95%D7%9C_%D7%90%D7%91%D7%A8%D7%95%D7%9F_%28cropped%29.JPG",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "זהרירה חריפאי",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Merome0015-2.jpg/800px-Merome0015-2.jpg",
        "gender": "F",
        "alive": 0
    },
    {
        "name": "ג׳יטה מונטה",
        "img": "http://www.habama.co.il/Upload/MediaFiles/news1-1136.jpg",
        "gender": "F",
        "alive": 1
    },
    {
        "name": "דן בן אמוץ",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Dan_Ben_Amotz_1961.jpg/500px-Dan_Ben_Amotz_1961.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "יחזקאל לזרוב",
        "img": "http://www.zohar-agency.com/wp-content/uploads/actor83963-201211141515495111.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "ליה ון ליר",
        "img": "https://img.mako.co.il/2015/03/15/613783pic_I.jpg",
        "gender": "F",
        "alive": 0
    },
    {
        "name": "אניטה פללי",
        "img": "https://images1.ynet.co.il/PicServer2/01082004/452338/3_hh.jpg",
        "gender": "F",
        "alive": 1
    },
    {
        "name": "גברי בנאי",
        "img": "http://images8.webydo.com/92/9289613/3958%2FB2333FC5-82E8-0229-3D45-EE89DCCB1277.jpg_512",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "ישראל פוליאקוב",
        "img": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Yisrael_Poliakov.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "יגאל שילון",
        "img": "https://upload.wikimedia.org/wikipedia/commons/7/78/Igal_sgilon.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "מיכה חריש",
        "img": "https://img.wcdn.co.il/w_200/9/1/7/2/917283-46.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "סוניה פרס",
        "img": "http://a7.org/pictures/657/657068.jpg",
        "gender": "F",
        "alive": 0
    },
    {
        "name": "מרים בן פורת",
        "img": "https://images1.calcalist.co.il/PicServer2/20122005/591792/66_l.jpg",
        "gender": "F",
        "alive": 0
    },
    {
        "name": "שושנה ארבלי אלמוזלינו",
        "img": "https://upload.wikimedia.org/wikipedia/he/a/ae/%D7%A9%D7%95%D7%A9%D7%A0%D7%94_%D7%90%D7%A8%D7%91%D7%9C%D7%99_%D7%90%D7%9C%D7%9E%D7%95%D7%96%D7%9C%D7%99%D7%A0%D7%95_1989.jpeg",
        "gender": "F",
        "alive": 0
    },
    {
        "name": "לובה אליאב",
        "img": "https://upload.wikimedia.org/wikipedia/commons/9/95/PikiWiki_Israel_28620_Art_of_Israel_%28cropped%29.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "דליה רביקוביץ",
        "img": "https://library.osu.edu/projects/hebrew-lexicon/00396_files/image006.jpg",
        "gender": "F",
        "alive": 0
    },
    {
        "name": "אגי משעול",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Agi_Mishol_by_Iris_Nesher.jpg/500px-Agi_Mishol_by_Iris_Nesher.jpg",
        "gender": "F",
        "alive": 1
    },
    {
        "name": "רוני רוזנטל",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Israel_v_New_Zealand_-_Ramat_Gan%2C_1989_-_Ronny_Rosenthal.jpg/1920px-Israel_v_New_Zealand_-_Ramat_Gan%2C_1989_-_Ronny_Rosenthal.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "ניקו ניתאי",
        "img": "https://upload.wikimedia.org/wikipedia/he/thumb/a/ae/%D7%94%D7%A0%D7%A4%D7%99%D7%9C%D7%94_-_%D7%A0%D7%99%D7%A7%D7%95_%D7%A0%D7%99%D7%AA%D7%90%D7%99.jpg/500px-%D7%94%D7%A0%D7%A4%D7%99%D7%9C%D7%94_-_%D7%A0%D7%99%D7%A7%D7%95_%D7%A0%D7%99%D7%AA%D7%90%D7%99.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "יעקב רכטר",
        "img": "https://www.makorrishon.co.il/nrg/images/archive/300x225/892/876.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "משה ספדי",
        "img": "https://upload.wikimedia.org/wikipedia/he/thumb/1/17/Moshesa16.JPG/1920px-Moshesa16.JPG",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "אברהם יסקי",
        "img": "https://upload.wikimedia.org/wikipedia/he/thumb/1/14/%D7%90%D7%91%D7%A8%D7%94%D7%9D%D7%99%D7%A1%D7%A7%D7%992011.jpg/500px-%D7%90%D7%91%D7%A8%D7%94%D7%9D%D7%99%D7%A1%D7%A7%D7%992011.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "רם כרמי",
        "img": "https://upload.wikimedia.org/wikipedia/he/0/04/%D7%A8%D7%9D%D7%9B%D7%A8%D7%9E%D7%992011.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "דויד עזריאלי",
        "img": "https://upload.wikimedia.org/wikipedia/commons/9/9f/David_Azrieli.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "אריה סיון (אדריכל)",
        "img": "https://www.haaretz.co.il/hasite/images/printed/P251110/a.v.2511.60.1.9.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "אריה סיון (משורר)",
        "img": "https://upload.wikimedia.org/wikipedia/he/d/d2/%D7%90%D7%A8%D7%99%D7%94_%D7%A1%D7%99%D7%95%D7%9F.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "יהושע קנז",
        "img": "https://upload.wikimedia.org/wikipedia/he/4/43/%D7%99%D7%94%D7%95%D7%A9%D7%A2_%D7%A7%D7%A0%D7%96_1991_%D7%A6%D7%99%D7%9C%D7%95%D7%9D-%D7%9E%D7%95%D7%98%D7%99_%D7%A7%D7%99%D7%A7%D7%99%D7%95%D7%9F.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "אהרן מגד",
        "img": "https://upload.wikimedia.org/wikipedia/he/5/5c/%D7%90%D7%94%D7%A8%D7%95%D7%9F_%D7%9E%D7%92%D7%93.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "יוסף בא-גד",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/%D7%94%D7%A8%D7%91_%D7%99%D7%95%D7%A1%D7%A3_%D7%91%D7%90%D7%92%D7%93.jpeg/800px-%D7%94%D7%A8%D7%91_%D7%99%D7%95%D7%A1%D7%A3_%D7%91%D7%90%D7%92%D7%93.jpeg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "נסים קיויתי",
        "img": "https://upload.wikimedia.org/wikipedia/commons/f/f7/%D7%A0%D7%99%D7%A1%D7%99%D7%9D.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "דוד פרלוב",
        "img": "https://upload.wikimedia.org/wikipedia/he/1/13/%D7%93%D7%95%D7%93_%D7%A4%D7%A8%D7%9C%D7%95%D7%91.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "נסים אלוני",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/%D7%A0%D7%99%D7%A1%D7%99%D7%9D_%D7%95%D7%97%D7%96%D7%A7%D7%99_%D7%91%D7%97%D7%96%D7%A8%D7%95%D7%AA_%D7%94%D7%97%D7%95%D7%9C%D7%94_%D7%94%D7%9E%D7%93%D7%95%D7%9E%D7%94_92_%D7%91%D7%A7%D7%90%D7%9E%D7%A8%D7%99.jpg/500px-%D7%A0%D7%99%D7%A1%D7%99%D7%9D_%D7%95%D7%97%D7%96%D7%A7%D7%99_%D7%91%D7%97%D7%96%D7%A8%D7%95%D7%AA_%D7%94%D7%97%D7%95%D7%9C%D7%94_%D7%94%D7%9E%D7%93%D7%95%D7%9E%D7%94_92_%D7%91%D7%A7%D7%90%D7%9E%D7%A8%D7%99.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "עליזה עזיקרי",
        "img": "https://upload.wikimedia.org/wikipedia/he/5/59/%D7%A2%D7%9C%D7%99%D7%96%D7%94_%D7%A2%D7%96%D7%99%D7%A7%D7%A8%D7%99.jpg",
        "gender": "F",
        "alive": 0
    },
    {
        "name": "גדעון זינגר",
        "img": "http://pmemorials.com/content/userfiles/users/webmaster_pmemorials_com/gallery_4557/894105716.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "שלמה ניצן",
        "img": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Shlomo_Nitzan_%28cropped%29.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "יגאל תומרקין",
        "img": "https://upload.wikimedia.org/wikipedia/commons/9/9c/YigalTumarkin.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "משה גרשוני",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Moshe_Gershuni_2008.jpg/220px-Moshe_Gershuni_2008.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "נתנאלה",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Netanela.jpg/500px-Netanela.jpg",
        "gender": "F",
        "alive": 1
    },
    {
        "name": "עזרא דגן",
        "img": "https://upload.wikimedia.org/wikipedia/commons/2/24/Ezra_Dagan.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "גרי אקשטיין",
        "img": "http://stereo-ve-mono.com/sleeves/09/0920301b.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "עוזי פוקס",
        "img": "https://upload.wikimedia.org/wikipedia/commons/4/45/Uzifux1.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "שולי נתן",
        "img": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Shuli_Nathan_%28photo_by_Daniel_Nasibov%29_02.JPG",
        "gender": "F",
        "alive": 1
    },
    {
        "name": "יאיר רוזנבלום",
        "img": "https://upload.wikimedia.org/wikipedia/he/1/1b/%D7%99%D7%90%D7%99%D7%A8_%D7%A8%D7%95%D7%96%D7%A0%D7%91%D7%9C%D7%95%D7%9D.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "יענקלה רוטבליט",
        "img": "https://upload.wikimedia.org/wikipedia/commons/9/90/Yankale_Rotblit.JPG",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "יהונתן גפן",
        "img": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Yehonatan_Geffen_1.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "אפרים סידון",
        "img": "http://www.navaro.co.il/site/upload/photos/136189469360358197a_t.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "אפרים קישון",
        "img": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Ephraim_Kishon_6.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "רמי מאירי",
        "img": "https://upload.wikimedia.org/wikipedia/he/thumb/a/ae/Meiri_reproduction_shout.jpg/500px-Meiri_reproduction_shout.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "דוד טרטקובר",
        "img": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Tartakover.png",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "יואל הופמן",
        "img": "https://library.osu.edu/projects/hebrew-lexicon/00817-files/image004.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "יורם קניוק",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Yoram_Kaniuk.JPG/480px-Yoram_Kaniuk.JPG",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "יורם טהרלב",
        "img": "http://www.taharlev.com/images/hppic.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "חיים טופול",
        "img": "https://www.maariv.co.il/HttpHandlers/ShowImage.ashx?id=319022&w=690&h=580",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "שלמה להט",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Centennial_IMG_3750.JPG/800px-Centennial_IMG_3750.JPG",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "רוני מילוא",
        "img": "https://img.wcdn.co.il/f_auto,w_500,t_54/1/3/8/4/1384799-46.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "שפרירה זכאי",
        "img": "https://upload.wikimedia.org/wikipedia/commons/e/e5/%D7%A9%D7%A4%D7%A8%D7%99%D7%A8%D7%94_%D7%96%D7%9B%D7%90%D7%99.jpg",
        "gender": "F",
        "alive": 1
    },
    {
        "name": "ניסן נתיב",
        "img": "https://upload.wikimedia.org/wikipedia/he/f/f6/NissanNativ_022Small.JPG",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "יצחק בן יצחק",
        "img": "http://img.mako.co.il/2011/10/27/gg893995.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "דידי מנוסי",
        "img": "https://library.osu.edu/projects/hebrew-lexicon/01101-files/image003.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "יהודה עמיחי",
        "img": "https://upload.wikimedia.org/wikipedia/he/d/df/Yehuda_amichai.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "אושיק לוי",
        "img": "https://upload.wikimedia.org/wikipedia/commons/2/29/Oshik_Levi.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "יוסי שריד",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Yossi_Sarid.JPG/220px-Yossi_Sarid.JPG",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "דקלון",
        "img": "https://i.ytimg.com/vi/WoZBWy37yd0/hqdefault.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "גבי ברלין",
        "img": "http://www.heichalpt.co.il/wp-content/uploads/2014/11/%D7%92%D7%91%D7%99-%D7%91%D7%A8%D7%9C%D7%99%D7%9F.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "ניצה שאול",
        "img": "https://upload.wikimedia.org/wikipedia/commons/2/22/Nitza_Shaul.jpg",
        "gender": "F",
        "alive": 1
    },
    {
        "name": "רפי איתן",
        "img": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Rafi_eitan_big.jpg",
        "gender": "M",
        "alive": 0
    },
    {
        "name": "חיים יבין",
        "img": "https://upload.wikimedia.org/wikipedia/commons/5/57/Zucky_Crystal_exhibition_for_the_memory_of_Hanna_Zemer_%D7%97%D7%99%D7%99%D7%9D_%D7%99%D7%91%D7%99%D7%9F_%288357780684%29_%28cropped%29.jpg",
        "gender": "M",
        "alive": 1
    },
    {
        "name": "שייקה לוי",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/%D7%A9%D7%99%D7%A7%D7%94_%D7%A9%D7%99%D7%99%D7%A7%D7%94_%D7%9C%D7%95%D7%99_%D7%91%D7%94%D7%9C%D7%95%D7%95%D7%99%D7%AA%D7%95_%D7%A9%D7%9C_%D7%90%D7%A8%D7%99%D7%A7_%D7%90%D7%99%D7%99%D7%A0%D7%A9%D7%98%D7%99%D7%99%D7%9F.JPG/1920px-%D7%A9%D7%99%D7%A7%D7%94_%D7%A9%D7%99%D7%99%D7%A7%D7%94_%D7%9C%D7%95%D7%99_%D7%91%D7%94%D7%9C%D7%95%D7%95%D7%99%D7%AA%D7%95_%D7%A9%D7%9C_%D7%90%D7%A8%D7%99%D7%A7_%D7%90%D7%99%D7%99%D7%A0%D7%A9%D7%98%D7%99%D7%99%D7%9F.JPG",
        "gender": "M",
        "alive": 1
    }
];
