/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "both",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Higher_Purpose_Mobile_Application_BG',
                            type: 'image',
                            rect: ['0', '0', '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(-4px 480px 798px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"Higher%20Purpose%20Mobile%20Application%20BG.png",'0px','0px']
                        },
                        {
                            id: 'Text__Holder',
                            display: 'block',
                            type: 'rect',
                            rect: ['18px', '163px', '444px', '618', 'auto', 'auto'],
                            clip: 'rect(0px 444px 0.8125px 0px)',
                            opacity: '0',
                            fill: ["rgba(237,237,237,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'viewpeak',
                            symbolName: 'viewpeak',
                            display: 'none',
                            type: 'rect',
                            rect: ['18', '168', '444', '611', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '0'
                        },
                        {
                            id: 'HPF_Media',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '-78', '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(88px 480px 174px 0px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"HPF%20Media.png",'0px','0px']
                        },
                        {
                            id: 'HPFEVent',
                            symbolName: 'HPFEVent',
                            display: 'block',
                            type: 'rect',
                            rect: ['18', '162', '444', '619', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'HPF_Events',
                            display: 'block',
                            type: 'image',
                            rect: ['0', '-78', '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(92px 480px 170px 0px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"HPF%20Events.png",'0px','0px']
                        },
                        {
                            id: 'HPFNews',
                            symbolName: 'HPFNews',
                            display: 'block',
                            type: 'rect',
                            rect: ['18', '163', '444', '618', 'auto', 'auto'],
                            overflow: 'scroll',
                            opacity: '0'
                        },
                        {
                            id: 'HPF_News',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '-78', '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(91.25px 480px 170px 0px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"HPF%20News.png",'0px','0px']
                        },
                        {
                            id: 'Order_Holder',
                            type: 'rect',
                            rect: ['18px', '163px', '444px', '0px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(223,219,219,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'viewerdvd',
                            symbolName: 'viewerdvd',
                            display: 'none',
                            type: 'rect',
                            rect: ['18px', '163px', '444', '614', 'auto', 'auto'],
                            opacity: '0.000000'
                        },
                        {
                            id: 'Order_DVD',
                            type: 'image',
                            rect: ['0px', '-73px', '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(93.84619140625px 480px 166.1539306640625px 0px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Order%20DVD.png",'0px','0px']
                        },
                        {
                            id: 'PRView',
                            symbolName: 'PRView',
                            display: 'none',
                            type: 'rect',
                            rect: ['18px', '168', '444', '613', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0'
                        },
                        {
                            id: 'Prayer_Request',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '-76', '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(94px 480px 174px 0px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Prayer%20Request.png",'0px','0px']
                        },
                        {
                            id: 'Text',
                            display: 'none',
                            type: 'text',
                            rect: ['30', '179', '420', '611', 'auto', 'auto'],
                            overflow: 'scroll',
                            opacity: '0',
                            text: "HOLY RIDAZ<br>Holy Ridaz is a ministry for young men ages 11-17. This ministry is designed to reach, develop and mentor young men of character. We accomplish this by practical biblical instruction and fun-filled activities. The end result will be a group of young men who want to walk with God and who have discipline and purpose.<br> <br>MUSIC &amp; ARTS TROOP<br>This ministry is designed to inspire and speak the purpose of God through music, drama, spoken word and Liturgical/prophetic dance. This ministry is for ages 5 – 95.<br> <br>SISTERS &amp; FRIENDS – WOMEN'S MINISTRY<br>Every woman needs a sister and a friend. This ministry is designed to create bonds between women that foster lifelong relationships. This is accomplished by conviviality and relational teaching.<br> <br>MEN OF PURPOSE – MEN'S MINISTRY<br>This ministry is designed to provide men with a clear biblical perspective of their role in the home, in the church and in society. This is accomplished through monthly meetings and annual retreats.<br> <br>HELPING HANDS PROJECT<br>This will be the community development corporation for HPF. This is an outreach from HPF to the greater community. Three areas of focus will be to engage single and disadvantaged mothers, domestic violence and drug abuse. We also provide services to the community through adopt-a-block and our annual Christmas toy drive.<br> <br>PRAYER &amp; INTERSESSION<br>This ministry is to motivate and provide a prayer focus for the entire church. We will also help build and strengthen the believer’s prayer life. Men are to always pray and not faint.<br> <br>REACHING THE WORLD<br>This ministry provides opportunities to partner with our brothers and sisters around the world. We will take missions trips and underwrite the work of God overseas by sponsorship of water wells.<br> <br>SINGLES MINISTRY<br>This will be a major focus for HPF. Almost 40% of the church is single and this demographic is underserved in the church. We care for and seek to help single Christians pursue Gods higher purpose for their lives. We will do this through regular meetings and innovative ministry.<br> <br>We are in the process of building these ministries and recruiting leaders/participants. Please contact the Church Office at (732)324-3967 to discuss your area of interest.",
                            align: "justify",
                            font: ['Arial, Helvetica, sans-serif', [16, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'paymentview',
                            symbolName: 'paymentview',
                            display: 'none',
                            type: 'rect',
                            rect: ['18', '162', '444', '619', 'auto', 'auto']
                        },
                        {
                            id: 'Make_a_Contribution',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '-80', '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(92px 480px 168px 0px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Make%20a%20Contribution.png",'0px','0px']
                        },
                        {
                            id: 'WWB_Text',
                            display: 'none',
                            type: 'text',
                            rect: ['30px', '178px', '415px', '590px', 'auto', 'auto'],
                            overflow: 'scroll',
                            opacity: '0',
                            text: "1. WE BELIEVE…The Scriptures are Inspired by God and declare His design and plan for mankind.<br><br>2. WE BELIEVE…There is only One True God–revealed in three persons…Father, Son, and Holy Spirit (commonly known as the Trinity).<br><br>3. WE BELIEVE…In the Deity of the Lord Jesus Christ. As God’s son Jesus was both human and divine.<br><br>4. WE BELIEVE…though originally good, Man Willingly Fell to Sin–ushering evil and death, both physical and spiritual, into the world.<br><br>5. WE BELIEVE…Every Person Can Have Restored Fellowship with God Through ‘Salvation’ (trusting Christ, through faith and repentance, to be our personal Savior). [1 of 4 cardinal doctrines of the AG]<br><br>6. WE BELIEVE…and practice two ordinances—(1) Water Baptism by Immersion after repenting of one’s sins and receiving Christ’s gift of salvation, and (2) Holy Communion (the Lord’s Supper) as a symbolic remembrance of Christ’s suffering and death for our salvation.<br><br>7. WE BELIEVE…the Baptism in the Holy Spirit is a Special Experience Following Salvation that empowers believers for witnessing and effective service, just as it did in New Testament times. [1 of 4 cardinal doctrines of the AG]<br><br>8. WE BELIEVE… The Initial Physical Evidence of the Baptism in the Holy Spirit is ‘Speaking in Tongues,’ as experienced on the Day of Pentecost and referenced throughout Acts and the Epistles.<br><br>9. WE BELIEVE…Sanctification Initially Occurs at Salvation and is not only a declaration that a believer is holy, but also a progressive lifelong process of separating from evil as believers continually draw closer to God and become more Christlike.<br><br>10. WE BELIEVE…The Church has a Mission to seek and save all who are lost in sin. We believe ‘the Church’ is the Body of Christ and consists of the people who, throughout time, have accepted God’s offer of redemption (regardless of religious denomination) through the sacrificial death of His son Jesus Christ.<br><br>11. WE BELIEVE…A Divinely Called and Scripturally Ordained Leadership Ministry Serves the Church. The Bible teaches that each of us under leadership must commit ourselves to reach others for Christ, to worship Him with other believers, to build up or edify the body of believers–the Church and to Meet human need with ministries of love and compassion.<br><br>12. WE BELIEVE…Divine Healing of the Sick is a Privilege for Christians Today and is provided for in Christ’s atonement (His sacrificial death on the cross for our sins). [1 of 4 cardinal doctrines of the AG]<br><br>13. WE BELIEVE…in The Blessed Hope—When Jesus Raptures His Church Prior to His Return to Earth (the second coming). At this future moment in time all believers who have died will rise from their graves and will meet the Lord in the air, and Christians who are alive will be caught up with them, to be with the Lord forever. [1 of 4 cardinal doctrines of the AG]<br><br>14. WE BELIEVE…in The Millennial Reign of Christ when Jesus returns with His saints at His second coming and begins His benevolent rule over earth for 1,000 years. This millennial reign will bring the salvation of national Israel and the establishment of universal peace.<br><br>15. WE BELIEVE…A Final Judgment Will Take Place for those who have rejected Christ. They will be judged for their sin and consigned to eternal punishment in a punishing lake of fire.<br><br>16. WE BELIEVE…and look forward to the perfect New Heavens and a New Earth that Christ is preparing for all people, of all time, who have accepted Him. We will live and dwell with Him there forever following His millennial reign on Earth. ‘And so shall we forever be with the Lord!’<br>",
                            align: "justify",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'What_We_Believe_Bar',
                            display: 'block',
                            type: 'image',
                            rect: ['0', '-78', '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(92.1875px 480px 171.875px 0px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"What%20We%20Believe%20Bar.png",'0px','0px']
                        },
                        {
                            id: 'OMViewWeb',
                            symbolName: 'OMViewWeb',
                            display: 'block',
                            type: 'rect',
                            rect: ['18', '163', '444', '618', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Our_Leadership_Team',
                            display: 'none',
                            type: 'image',
                            rect: ['-2', '-78', '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(90px 480px 170px 0px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Our%20Leadership%20Team.png",'0px','0px']
                        },
                        {
                            id: 'Our_Ministries2',
                            display: 'none',
                            type: 'image',
                            rect: ['-2', '-78', '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(96px 480px 172px 0px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Our%20Ministries.png",'0px','0px']
                        },
                        {
                            id: 'ContactView',
                            symbolName: 'ContactView',
                            display: 'none',
                            type: 'rect',
                            rect: ['18', '162', '444', '619', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '0'
                        },
                        {
                            id: 'Contact_Us_Banner',
                            display: 'block',
                            type: 'image',
                            rect: ['0', '-80', '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(95.3125px 480px 168.75px 0px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Contact%20Us%20Banner.png",'0px','0px']
                        },
                        {
                            id: 'About_Text',
                            display: 'none',
                            type: 'text',
                            rect: ['30', '178', '415px', '590px', 'auto', 'auto'],
                            overflow: 'scroll',
                            opacity: '0',
                            text: "Welcome to the official mobile application of  Higher Purpose Fellowship!<br><br>We, the family of Higher Purpose Fellowship, are thrilled that you have made the choice to visit our website and learn more about all the ministries and resources that we provide to assist you in identifying and fulfilling your “greater purpose!”<br><br>Higher Purpose Fellowship (HPF) is a cross cultural and diverse church which began October 2011 in Woodbridge, New Jersey. Pastor Michael Lynn Miller was lead of the Spirit of God to start a church that would impact Northern and Central New Jersey.<br><br>If you believe that there is more God wants to do in and through His church this is the place for you!<br><br>Our mission, as a local church…<br><br>Is to lead people into a God fulfilled life. We do this by showing the unconditional love of Jesus Christ and consistently preaching and teaching the whole counsel of God with emphasis on the need to find your life’s purpose and pursue it, for the Glory of God.<br><br>Higher Purpose Fellowship is here to lead, serve and mentor Christian’s into spiritual maturity and a satisfying relationship with Jesus Christ. The latest statistics say that 41% of Bible believing, God honoring Christians do not affiliate with a local church. It is our prayer and desire to be a solution to that problem.<br><br>Please feel free to contact us for more information or visit any of our services. Our family would be honored to have you as our special guest and we look forward to sharing a worship experience with you when you visit Higher Purpose Fellowship.<br>",
                            align: "justify",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'About_Banner',
                            display: 'block',
                            type: 'image',
                            rect: ['0', '-80', '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(97.142822265625px 480px 170px 0px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"About%20Banner.png",'0px','0px']
                        },
                        {
                            id: 'Download_Sermons',
                            type: 'image',
                            rect: ['0px', '0px', '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(428.75px 480px 498.75px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"Download%20Sermons.png",'0px','0px']
                        },
                        {
                            id: 'Higher_Purpose_Mobile_Application_Slide_Holder',
                            display: 'block',
                            type: 'image',
                            rect: ['0', '-432', '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(0px 480px 430px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"Higher%20Purpose%20Mobile%20Application%20Slide%20Holder.png",'0px','0px']
                        },
                        {
                            id: 'Show_Movie',
                            symbolName: 'Show_Movie',
                            display: 'block',
                            type: 'rect',
                            rect: ['2', '-353', '480', '331', 'auto', 'auto'],
                            clip: 'rect(20px 475px 331px 0px)',
                            opacity: '0',
                            transform: [[],[],[],['1.01053','1.05895']]
                        },
                        {
                            id: 'Nav_Bar',
                            type: 'image',
                            rect: ['0', '-110', '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(0px 480px 102px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"Nav%20Bar.png",'0px','0px']
                        },
                        {
                            id: 'logoano',
                            symbolName: 'logoano',
                            type: 'rect',
                            rect: ['-300', '0', '480', '800', 'auto', 'auto'],
                            clip: 'rect(0px 614.17724609375px 83.54443359375px 302.53125px)'
                        },
                        {
                            id: 'Higher_Purpose_Mobile_Application_Home_Buttons',
                            display: 'block',
                            type: 'image',
                            rect: ['-5', '0', '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(482px 452px 800px 34px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Higher%20Purpose%20Mobile%20Application%20Home%20Buttons.png",'0px','0px'],
                            transform: [[],[],[],[],['51.67%','80.75%']]
                        },
                        {
                            id: 'community_btn',
                            display: 'none',
                            type: 'rect',
                            rect: ['45', '505px', '188px', '133px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(8,3,23,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'peek_btn',
                            display: 'none',
                            type: 'rect',
                            rect: ['247', '505px', '188px', '133px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(8,3,23,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'event_btn',
                            display: 'none',
                            type: 'rect',
                            rect: ['43', '648', '188px', '133px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(8,3,23,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'PRbtn',
                            display: 'none',
                            type: 'rect',
                            rect: ['251', '653px', '181px', '133px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(237,237,237,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'MenuActive_Click',
                            symbolName: 'MenuActive_Click',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '480', '800', 'auto', 'auto']
                        },
                        {
                            id: 'Menu_btn',
                            symbolName: 'Menu_btn',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '480', '800', 'auto', 'auto'],
                            clip: 'rect(0px 480px 76.6669921875px 343.33349609375px)'
                        },
                        {
                            id: 'HHPLOGO_Click',
                            type: 'rect',
                            rect: ['12px', '5', '337px', '79px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(237,237,237,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '480', '800', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 33931,
                    autoPlay: true,
                    labels: {
                        "Home": 2090,
                        "About HPF": 3310,
                        "WWB": 5065,
                        "Contact": 6388,
                        "Leadership": 8000,
                        "OurMin": 10250,
                        "contribute": 11862,
                        "News": 14243,
                        "Events": 16045,
                        "PrayerRequest": 17650,
                        "Peak": 19936,
                        "Orders": 22500
                    },
                    data: [
                        [
                            "eid450",
                            "opacity",
                            6388,
                            450,
                            "easeInOutExpo",
                            "${Contact_Us_Banner}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1396",
                            "opacity",
                            16930,
                            485,
                            "easeInOutExpo",
                            "${HPFEVent}",
                            '0',
                            '1'
                        ],
                        [
                            "eid797",
                            "display",
                            0,
                            0,
                            "easeInOutExpo",
                            "${About_Text}",
                            'none',
                            'none'
                        ],
                        [
                            "eid798",
                            "display",
                            4500,
                            0,
                            "easeInOutExpo",
                            "${About_Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid422",
                            "display",
                            5000,
                            0,
                            "easeInOutExpo",
                            "${About_Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid287",
                            "display",
                            3195,
                            0,
                            "easeInOutExpo",
                            "${Higher_Purpose_Mobile_Application_Home_Buttons}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1811",
                            "display",
                            3195,
                            0,
                            "easeInOutExpo",
                            "${Download_Sermons}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2",
                            "top",
                            0,
                            500,
                            "easeInExpo",
                            "${Nav_Bar}",
                            '-110px',
                            '0px'
                        ],
                        [
                            "eid286",
                            "display",
                            3195,
                            0,
                            "easeInOutExpo",
                            "${Show_Movie}",
                            'block',
                            'none'
                        ],
                        [
                            "eid819",
                            "top",
                            8000,
                            450,
                            "easeInOutExpo",
                            "${Our_Leadership_Team}",
                            '-78px',
                            '1px'
                        ],
                        [
                            "eid1510",
                            "display",
                            0,
                            0,
                            "easeInOutExpo",
                            "${PRbtn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1511",
                            "display",
                            3090,
                            0,
                            "easeInOutExpo",
                            "${PRbtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1512",
                            "display",
                            3145,
                            0,
                            "easeInOutExpo",
                            "${PRbtn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid596",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ContactView}",
                            'none',
                            'none'
                        ],
                        [
                            "eid597",
                            "display",
                            7250,
                            0,
                            "linear",
                            "${ContactView}",
                            'none',
                            'block'
                        ],
                        [
                            "eid660",
                            "display",
                            7940,
                            0,
                            "linear",
                            "${ContactView}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1477",
                            "top",
                            17650,
                            450,
                            "easeInOutExpo",
                            "${Prayer_Request}",
                            '-76px',
                            '1px'
                        ],
                        [
                            "eid262",
                            "display",
                            0,
                            0,
                            "easeInOutExpo",
                            "${Menu_btn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid263",
                            "display",
                            500,
                            0,
                            "easeInOutExpo",
                            "${Menu_btn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid451",
                            "display",
                            0,
                            0,
                            "easeInOutExpo",
                            "${WWB_Text}",
                            'none',
                            'none'
                        ],
                        [
                            "eid452",
                            "display",
                            5065,
                            0,
                            "easeInOutExpo",
                            "${WWB_Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid440",
                            "display",
                            6330,
                            0,
                            "easeInOutExpo",
                            "${WWB_Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid991",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Make_a_Contribution}",
                            'none',
                            'none'
                        ],
                        [
                            "eid989",
                            "display",
                            11750,
                            0,
                            "linear",
                            "${Make_a_Contribution}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1013",
                            "display",
                            11862,
                            0,
                            "linear",
                            "${Make_a_Contribution}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1014",
                            "display",
                            13862,
                            0,
                            "easeInOutExpo",
                            "${Make_a_Contribution}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1277",
                            "display",
                            14069,
                            0,
                            "easeInOutExpo",
                            "${Make_a_Contribution}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1015",
                            "display",
                            21369,
                            0,
                            "linear",
                            "${Make_a_Contribution}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1315",
                            "display",
                            23750,
                            0,
                            "easeInOutExpo",
                            "${Make_a_Contribution}",
                            'none',
                            'none'
                        ],
                        [
                            "eid448",
                            "top",
                            6388,
                            450,
                            "easeInOutExpo",
                            "${Contact_Us_Banner}",
                            '-80px',
                            '0px'
                        ],
                        [
                            "eid1840",
                            "top",
                            22500,
                            500,
                            "easeInOutExpo",
                            "${Order_DVD}",
                            '-73px',
                            '0px'
                        ],
                        [
                            "eid1307",
                            "top",
                            14243,
                            450,
                            "easeInOutExpo",
                            "${HPF_News}",
                            '-78px',
                            '0px'
                        ],
                        [
                            "eid1491",
                            "display",
                            0,
                            0,
                            "easeInOutExpo",
                            "${PRView}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1492",
                            "display",
                            18535,
                            0,
                            "easeInOutExpo",
                            "${PRView}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1534",
                            "display",
                            19692,
                            0,
                            "linear",
                            "${PRView}",
                            'block',
                            'none'
                        ],
                        [
                            "eid708",
                            "opacity",
                            8935,
                            572,
                            "easeInOutExpo",
                            "${OMViewWeb}",
                            '0',
                            '1'
                        ],
                        [
                            "eid23",
                            "opacity",
                            2090,
                            1000,
                            "easeInOutExpo",
                            "${Higher_Purpose_Mobile_Application_Home_Buttons}",
                            '0',
                            '1'
                        ],
                        [
                            "eid442",
                            "display",
                            6330,
                            0,
                            "easeInOutExpo",
                            "${What_We_Believe_Bar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid206",
                            "opacity",
                            1125,
                            415,
                            "easeInOutExpo",
                            "${Show_Movie}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1547",
                            "opacity",
                            19936,
                            450,
                            "easeInOutExpo",
                            "${HPF_Media}",
                            '0',
                            '1'
                        ],
                        [
                            "eid204",
                            "top",
                            1125,
                            415,
                            "easeInOutExpo",
                            "${Show_Movie}",
                            '-353px',
                            '87px'
                        ],
                        [
                            "eid1842",
                            "opacity",
                            22500,
                            500,
                            "easeInOutExpo",
                            "${Order_DVD}",
                            '0',
                            '1'
                        ],
                        [
                            "eid599",
                            "opacity",
                            7250,
                            605,
                            "linear",
                            "${ContactView}",
                            '0',
                            '1'
                        ],
                        [
                            "eid874",
                            "opacity",
                            11093,
                            508,
                            "easeInOutExpo",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1328",
                            "opacity",
                            15128,
                            683,
                            "easeInOutExpo",
                            "${HPFNews}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1680",
                            "scaleY",
                            3090,
                            0,
                            "easeInOutExpo",
                            "${Higher_Purpose_Mobile_Application_Home_Buttons}",
                            '1',
                            '1'
                        ],
                        [
                            "eid669",
                            "top",
                            10250,
                            450,
                            "easeInOutExpo",
                            "${Our_Ministries2}",
                            '-78px',
                            '1px'
                        ],
                        [
                            "eid667",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Our_Ministries2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid666",
                            "display",
                            7940,
                            0,
                            "linear",
                            "${Our_Ministries2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid668",
                            "display",
                            10250,
                            0,
                            "linear",
                            "${Our_Ministries2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid887",
                            "display",
                            11750,
                            0,
                            "easeInOutExpo",
                            "${Our_Ministries2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1996",
                            "opacity",
                            23412,
                            473,
                            "easeInOutBack",
                            "${viewerdvd}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1364",
                            "display",
                            17552,
                            0,
                            "linear",
                            "${HPF_Events}",
                            'block',
                            'none'
                        ],
                        [
                            "eid830",
                            "display",
                            10000,
                            0,
                            "easeInOutExpo",
                            "${OMViewWeb}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1362",
                            "top",
                            16045,
                            450,
                            "easeInOutExpo",
                            "${HPF_Events}",
                            '-78px',
                            '1px'
                        ],
                        [
                            "eid459",
                            "display",
                            0,
                            0,
                            "easeInOutExpo",
                            "${MenuActive_Click}",
                            'none',
                            'none'
                        ],
                        [
                            "eid341",
                            "display",
                            3090,
                            0,
                            "easeInOutExpo",
                            "${MenuActive_Click}",
                            'none',
                            'none'
                        ],
                        [
                            "eid458",
                            "display",
                            3145,
                            0,
                            "easeInOutExpo",
                            "${MenuActive_Click}",
                            'none',
                            'none'
                        ],
                        [
                            "eid729",
                            "display",
                            8250,
                            0,
                            "easeInOutExpo",
                            "${MenuActive_Click}",
                            'none',
                            'none'
                        ],
                        [
                            "eid908",
                            "display",
                            11750,
                            0,
                            "easeInOutExpo",
                            "${MenuActive_Click}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1409",
                            "display",
                            12682,
                            0,
                            "easeInOutExpo",
                            "${MenuActive_Click}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1329",
                            "display",
                            14243,
                            0,
                            "easeInOutExpo",
                            "${MenuActive_Click}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1038",
                            "display",
                            19000,
                            0,
                            "easeInOutExpo",
                            "${MenuActive_Click}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8",
                            "top",
                            1125,
                            415,
                            "easeInOutQuad",
                            "${Higher_Purpose_Mobile_Application_Slide_Holder}",
                            '-432px',
                            '2px'
                        ],
                        [
                            "eid496",
                            "display",
                            7895,
                            0,
                            "linear",
                            "${Contact_Us_Banner}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1476",
                            "opacity",
                            17650,
                            450,
                            "easeInOutExpo",
                            "${Prayer_Request}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1017",
                            "top",
                            11862,
                            450,
                            "easeInOutExpo",
                            "${Make_a_Contribution}",
                            '-80px',
                            '0px'
                        ],
                        [
                            "eid1397",
                            "display",
                            17552,
                            0,
                            "easeInOutExpo",
                            "${HPFEVent}",
                            'block',
                            'none'
                        ],
                        [
                            "eid274",
                            "display",
                            0,
                            0,
                            "easeInOutExpo",
                            "${peek_btn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid278",
                            "display",
                            3090,
                            0,
                            "easeInOutExpo",
                            "${peek_btn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid282",
                            "display",
                            3195,
                            0,
                            "easeInOutExpo",
                            "${peek_btn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1679",
                            "scaleX",
                            3090,
                            0,
                            "easeInOutExpo",
                            "${Higher_Purpose_Mobile_Application_Home_Buttons}",
                            '1',
                            '1'
                        ],
                        [
                            "eid871",
                            "display",
                            0,
                            0,
                            "easeInOutExpo",
                            "${Text}",
                            'none',
                            'none'
                        ],
                        [
                            "eid872",
                            "display",
                            11093,
                            0,
                            "easeInOutExpo",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid885",
                            "display",
                            11750,
                            0,
                            "easeInOutExpo",
                            "${Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1470",
                            "display",
                            5830,
                            0,
                            "linear",
                            "${Prayer_Request}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1471",
                            "display",
                            17580,
                            0,
                            "linear",
                            "${Prayer_Request}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1472",
                            "display",
                            17650,
                            0,
                            "linear",
                            "${Prayer_Request}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1473",
                            "display",
                            19692,
                            0,
                            "easeInOutExpo",
                            "${Prayer_Request}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1849",
                            "opacity",
                            23000,
                            500,
                            "easeInOutExpo",
                            "${Order_Holder}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1583",
                            "opacity",
                            20821,
                            750,
                            "easeInOutExpo",
                            "${viewpeak}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1016",
                            "opacity",
                            11862,
                            450,
                            "easeInOutExpo",
                            "${Make_a_Contribution}",
                            '0',
                            '1'
                        ],
                        [
                            "eid319",
                            "opacity",
                            4065,
                            435,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            '0',
                            '1'
                        ],
                        [
                            "eid430",
                            "opacity",
                            5395,
                            435,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            '0',
                            '1'
                        ],
                        [
                            "eid445",
                            "opacity",
                            6935,
                            435,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            '0',
                            '1'
                        ],
                        [
                            "eid695",
                            "opacity",
                            8500,
                            435,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            '0',
                            '1'
                        ],
                        [
                            "eid834",
                            "opacity",
                            10700,
                            435,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1019",
                            "opacity",
                            12312,
                            435,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1324",
                            "opacity",
                            14693,
                            435,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1368",
                            "opacity",
                            16495,
                            435,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1479",
                            "opacity",
                            18100,
                            435,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1550",
                            "opacity",
                            20386,
                            435,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            '0',
                            '1'
                        ],
                        [
                            "eid301",
                            "top",
                            3310,
                            440,
                            "easeInOutExpo",
                            "${About_Banner}",
                            '-80px',
                            '0px'
                        ],
                        [
                            "eid1259",
                            "display",
                            0,
                            0,
                            "easeInOutExpo",
                            "${paymentview}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1270",
                            "display",
                            12570,
                            0,
                            "easeInOutExpo",
                            "${paymentview}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1276",
                            "display",
                            14069,
                            0,
                            "easeInOutExpo",
                            "${paymentview}",
                            'block',
                            'none'
                        ],
                        [
                            "eid441",
                            "opacity",
                            5830,
                            435,
                            "easeInOutExpo",
                            "${WWB_Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1548",
                            "top",
                            19936,
                            450,
                            "easeInOutExpo",
                            "${HPF_Media}",
                            '-78px',
                            '0px'
                        ],
                        [
                            "eid1812",
                            "opacity",
                            1540,
                            600,
                            "easeInOutExpo",
                            "${Download_Sermons}",
                            '0',
                            '1'
                        ],
                        [
                            "eid424",
                            "display",
                            5000,
                            0,
                            "easeInOutExpo",
                            "${About_Banner}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1363",
                            "opacity",
                            16045,
                            450,
                            "easeInOutExpo",
                            "${HPF_Events}",
                            '0',
                            '1'
                        ],
                        [
                            "eid303",
                            "opacity",
                            3310,
                            440,
                            "easeInOutExpo",
                            "${About_Banner}",
                            '0',
                            '1'
                        ],
                        [
                            "eid428",
                            "opacity",
                            5065,
                            385,
                            "easeInOutExpo",
                            "${What_We_Believe_Bar}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1813",
                            "top",
                            1540,
                            600,
                            "easeInOutExpo",
                            "${Download_Sermons}",
                            '-80px',
                            '0px'
                        ],
                        [
                            "eid1309",
                            "display",
                            2381,
                            0,
                            "linear",
                            "${HPF_News}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1310",
                            "display",
                            14131,
                            0,
                            "linear",
                            "${HPF_News}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1311",
                            "display",
                            14243,
                            0,
                            "linear",
                            "${HPF_News}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1312",
                            "display",
                            16243,
                            0,
                            "easeInOutExpo",
                            "${HPF_News}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1313",
                            "display",
                            16450,
                            0,
                            "easeInOutExpo",
                            "${HPF_News}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1314",
                            "display",
                            23750,
                            0,
                            "linear",
                            "${HPF_News}",
                            'none',
                            'none'
                        ],
                        [
                            "eid823",
                            "display",
                            8000,
                            0,
                            "linear",
                            "${Our_Leadership_Team}",
                            'none',
                            'block'
                        ],
                        [
                            "eid831",
                            "display",
                            10000,
                            0,
                            "easeInOutExpo",
                            "${Our_Leadership_Team}",
                            'block',
                            'none'
                        ],
                        [
                            "eid824",
                            "display",
                            17507,
                            0,
                            "linear",
                            "${Our_Leadership_Team}",
                            'none',
                            'none'
                        ],
                        [
                            "eid315",
                            "opacity",
                            4500,
                            435,
                            "easeInOutExpo",
                            "${About_Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2195",
                            "display",
                            0,
                            0,
                            "linear",
                            "${viewpeak}",
                            'none',
                            'none'
                        ],
                        [
                            "eid2196",
                            "display",
                            20821,
                            0,
                            "linear",
                            "${viewpeak}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1855",
                            "display",
                            22000,
                            0,
                            "easeInOutExpo",
                            "${viewpeak}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2197",
                            "display",
                            0,
                            0,
                            "linear",
                            "${viewerdvd}",
                            'none',
                            'none'
                        ],
                        [
                            "eid2198",
                            "display",
                            23412,
                            0,
                            "linear",
                            "${viewerdvd}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17",
                            "-webkit-transform-origin",
                            2090,
                            1000,
                            "easeInOutExpo",
                            "${Higher_Purpose_Mobile_Application_Home_Buttons}",
                            [51.67,80.75],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid2224",
                            "-moz-transform-origin",
                            2090,
                            1000,
                            "easeInOutExpo",
                            "${Higher_Purpose_Mobile_Application_Home_Buttons}",
                            [51.67,80.75],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid2225",
                            "-ms-transform-origin",
                            2090,
                            1000,
                            "easeInOutExpo",
                            "${Higher_Purpose_Mobile_Application_Home_Buttons}",
                            [51.67,80.75],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid2226",
                            "msTransformOrigin",
                            2090,
                            1000,
                            "easeInOutExpo",
                            "${Higher_Purpose_Mobile_Application_Home_Buttons}",
                            [51.67,80.75],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid2227",
                            "-o-transform-origin",
                            2090,
                            1000,
                            "easeInOutExpo",
                            "${Higher_Purpose_Mobile_Application_Home_Buttons}",
                            [51.67,80.75],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid2228",
                            "transform-origin",
                            2090,
                            1000,
                            "easeInOutExpo",
                            "${Higher_Purpose_Mobile_Application_Home_Buttons}",
                            [51.67,80.75],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1847",
                            "height",
                            23000,
                            500,
                            "easeInOutExpo",
                            "${Order_Holder}",
                            '0px',
                            '616px'
                        ],
                        [
                            "eid1494",
                            "opacity",
                            18535,
                            382,
                            "easeInOutExpo",
                            "${PRView}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1365",
                            "display",
                            16000,
                            0,
                            "easeInOutExpo",
                            "${HPFNews}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1345",
                            "display",
                            16243,
                            0,
                            "easeInOutExpo",
                            "${HPFNews}",
                            'none',
                            'none'
                        ],
                        [
                            "eid423",
                            "display",
                            5000,
                            0,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            'block',
                            'none'
                        ],
                        [
                            "eid436",
                            "display",
                            5395,
                            0,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            'none',
                            'block'
                        ],
                        [
                            "eid443",
                            "display",
                            6330,
                            0,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            'block',
                            'none'
                        ],
                        [
                            "eid444",
                            "display",
                            6935,
                            0,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            'none',
                            'block'
                        ],
                        [
                            "eid495",
                            "display",
                            7895,
                            0,
                            "linear",
                            "${Text__Holder}",
                            'block',
                            'none'
                        ],
                        [
                            "eid694",
                            "display",
                            8500,
                            0,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            'none',
                            'block'
                        ],
                        [
                            "eid832",
                            "display",
                            10000,
                            0,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            'block',
                            'none'
                        ],
                        [
                            "eid833",
                            "display",
                            10700,
                            0,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            'none',
                            'block'
                        ],
                        [
                            "eid886",
                            "display",
                            11750,
                            0,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1018",
                            "display",
                            12312,
                            0,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1278",
                            "display",
                            14069,
                            0,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1323",
                            "display",
                            14693,
                            0,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1366",
                            "display",
                            16000,
                            0,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1346",
                            "display",
                            16243,
                            0,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1367",
                            "display",
                            16495,
                            0,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1398",
                            "display",
                            17552,
                            0,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1478",
                            "display",
                            18100,
                            0,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1535",
                            "display",
                            19692,
                            0,
                            "linear",
                            "${Text__Holder}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1549",
                            "display",
                            20386,
                            0,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1856",
                            "display",
                            22000,
                            0,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            'block',
                            'none'
                        ],
                        [
                            "eid820",
                            "opacity",
                            8000,
                            450,
                            "easeInOutExpo",
                            "${Our_Leadership_Team}",
                            '0',
                            '1'
                        ],
                        [
                            "eid670",
                            "opacity",
                            10250,
                            450,
                            "easeInOutExpo",
                            "${Our_Ministries2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid426",
                            "top",
                            5065,
                            385,
                            "easeInOutExpo",
                            "${What_We_Believe_Bar}",
                            '-78px',
                            '1px'
                        ],
                        [
                            "eid317",
                            "clip",
                            4065,
                            435,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            [0,444,0.8125,0],
                            [0,444,618,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid429",
                            "clip",
                            5395,
                            435,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            [0,444,0.8125,0],
                            [0,444,618,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid446",
                            "clip",
                            6935,
                            435,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            [0,444,0.8125,0],
                            [0,444,618,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid696",
                            "clip",
                            8500,
                            435,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            [0,444,0.8125,0],
                            [0,444,618,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid835",
                            "clip",
                            10700,
                            435,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            [0,444,0.8125,0],
                            [0,444,618,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1020",
                            "clip",
                            12312,
                            435,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            [0,444,0.8125,0],
                            [0,444,618,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1325",
                            "clip",
                            14693,
                            435,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            [0,444,0.8125,0],
                            [0,444,618,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1369",
                            "clip",
                            16495,
                            435,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            [0,444,0.8125,0],
                            [0,444,618,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1480",
                            "clip",
                            18100,
                            435,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            [0,444,0.8125,0],
                            [0,444,618,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1551",
                            "clip",
                            20386,
                            435,
                            "easeInOutExpo",
                            "${Text__Holder}",
                            [0,444,0.8125,0],
                            [0,444,618,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid277",
                            "display",
                            0,
                            0,
                            "easeInOutExpo",
                            "${community_btn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid281",
                            "display",
                            3090,
                            0,
                            "easeInOutExpo",
                            "${community_btn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid285",
                            "display",
                            3195,
                            0,
                            "easeInOutExpo",
                            "${community_btn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1541",
                            "display",
                            19862,
                            0,
                            "linear",
                            "${HPF_Media}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1543",
                            "display",
                            19936,
                            0,
                            "linear",
                            "${HPF_Media}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1857",
                            "display",
                            22000,
                            0,
                            "easeInOutExpo",
                            "${HPF_Media}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1544",
                            "display",
                            33724,
                            0,
                            "easeInOutExpo",
                            "${HPF_Media}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1545",
                            "display",
                            33931,
                            0,
                            "easeInOutExpo",
                            "${HPF_Media}",
                            'none',
                            'none'
                        ],
                        [
                            "eid275",
                            "display",
                            0,
                            0,
                            "easeInOutExpo",
                            "${event_btn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid279",
                            "display",
                            3090,
                            0,
                            "easeInOutExpo",
                            "${event_btn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1528",
                            "display",
                            3145,
                            0,
                            "linear",
                            "${event_btn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid284",
                            "display",
                            3195,
                            0,
                            "easeInOutExpo",
                            "${event_btn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid288",
                            "display",
                            3195,
                            0,
                            "easeInOutExpo",
                            "${Higher_Purpose_Mobile_Application_Slide_Holder}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1308",
                            "opacity",
                            14243,
                            450,
                            "easeInOutExpo",
                            "${HPF_News}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Show_Movie": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '480px', 331, 'auto', 'auto'],
                            id: 'Slides',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(8,3,23,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 480, 331]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Menu_btn": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '480px', '800px', 'auto', 'auto'],
                            id: 'Menu_Image',
                            type: 'image',
                            clip: 'rect(0px 480px 76.66650390625px 360px)',
                            fill: ['rgba(0,0,0,0)', 'images/Menu%20Image.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 480, 800]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "MenuActive_Click": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [11, 0, '480px', '800px', 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.95333', 1, 1], ['50%', '50%']],
                            type: 'image',
                            id: 'Higher_Purpose_Mobile_Application_Menu',
                            display: 'none',
                            clip: 'rect(90px 480px 630px 180px)',
                            fill: ['rgba(0,0,0,0)', 'images/Higher%20Purpose%20Mobile%20Application%20Menu.png', '0px', '0px']
                        },
                        {
                            rect: [187, 445, 287, '61px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'HPFEvents',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(237,237,237,1)']
                        },
                        {
                            rect: [193, 389, 287, '61px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'HPFNews_BTN',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(237,237,237,1)']
                        },
                        {
                            rect: [193, 565, 287, '61px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'contrib',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(237,237,237,1)']
                        },
                        {
                            rect: [193, '145px', 287, '61px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'About_Click',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(237,237,237,1)']
                        },
                        {
                            rect: [193, '206px', 287, '61px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'WWB_Click',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(237,237,237,1)']
                        },
                        {
                            rect: [193, 267, 287, '61px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'LEADERSHIP_CLICK',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(237,237,237,1)']
                        },
                        {
                            rect: [193, 328, 287, '61px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Our_Ministries',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(237,237,237,1)']
                        },
                        {
                            rect: ['187px', '514px', '287px', '44px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(237,237,237,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 480, 800]
                        }
                    }
                },
                timeline: {
                    duration: 8250,
                    autoPlay: true,
                    data: [
                        [
                            "eid730",
                            "scaleX",
                            8250,
                            0,
                            "easeInOutExpo",
                            "${Higher_Purpose_Mobile_Application_Menu}",
                            '0.95333',
                            '0.95333'
                        ],
                        [
                            "eid261",
                            "display",
                            0,
                            0,
                            "easeInOutExpo",
                            "${Higher_Purpose_Mobile_Application_Menu}",
                            'none',
                            'none'
                        ],
                        [
                            "eid335",
                            "display",
                            3090,
                            0,
                            "easeInOutExpo",
                            "${Higher_Purpose_Mobile_Application_Menu}",
                            'none',
                            'block'
                        ],
                        [
                            "eid731",
                            "left",
                            8250,
                            0,
                            "easeInOutExpo",
                            "${Higher_Purpose_Mobile_Application_Menu}",
                            '11px',
                            '11px'
                        ]
                    ]
                }
            },
            "ContactView": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Webview2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0', '0', '444px', '619', 'auto', 'auto'],
                            fill: ['rgba(203,203,203,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '444', '619']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "OMViewWeb": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '444px', '618', 'auto', 'auto'],
                            id: 'Our_Ministries',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(237,237,237,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '444', '618']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "paymentview": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '444px', '619px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Payment',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(158,158,158,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '444', '619']
                        }
                    }
                },
                timeline: {
                    duration: 13164,
                    autoPlay: true,
                    data: [
                        [
                            "eid1022",
                            "opacity",
                            12690,
                            474,
                            "easeInOutExpo",
                            "${Payment}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "HPFNews": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'NewView',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0', '0', '444px', '618', 'auto', 'auto'],
                            fill: ['rgba(237,237,237,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '444', '618']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "HPFEVent": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Events',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0', '0', '444px', '619', 'auto', 'auto'],
                            fill: ['rgba(237,237,237,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '444', '619']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "PRView": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'PrayRequest',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0', '0', '444px', '613', 'auto', 'auto'],
                            fill: ['rgba(167,167,167,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '444', '613']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "viewpeak": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '444px', '611', 'auto', 'auto'],
                            id: 'peakview',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(237,237,237,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '444', '611']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "logoano": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Higher_Purpose_Mobile_Application_Logo',
                            opacity: '0',
                            rect: ['0px', '0px', '480px', '800px', 'auto', 'auto'],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            transform: [[], [], [], [], ['32.0833%', '5%']],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            clip: 'rect(0px 301.359375px 81.611572265625px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/Higher%20Purpose%20Mobile%20Application%20Logo.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '480px', '800px']
                        }
                    }
                },
                timeline: {
                    duration: 13000,
                    autoPlay: true,
                    labels: {
                        "repeat": 1500
                    },
                    data: [
                        [
                            "eid4",
                            "left",
                            500,
                            625,
                            "easeInOutQuad",
                            "${Higher_Purpose_Mobile_Application_Logo}",
                            '0px',
                            '300px'
                        ],
                        [
                            "eid1874",
                            "originX",
                            12250,
                            0,
                            "easeInOutExpo",
                            "${Higher_Purpose_Mobile_Application_Logo}",
                            '32.0833%',
                            '32.0833%'
                        ],
                        [
                            "eid1890",
                            "originX",
                            13000,
                            0,
                            "easeInOutExpo",
                            "${Higher_Purpose_Mobile_Application_Logo}",
                            '32.0833%',
                            '32.0833%'
                        ],
                        [
                            "eid6",
                            "opacity",
                            500,
                            625,
                            "easeInOutQuad",
                            "${Higher_Purpose_Mobile_Application_Logo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1888",
                            "scaleX",
                            12250,
                            411,
                            "easeInOutBack",
                            "${Higher_Purpose_Mobile_Application_Logo}",
                            '1',
                            '1.12884'
                        ],
                        [
                            "eid1891",
                            "scaleX",
                            12661,
                            339,
                            "easeInOutBack",
                            "${Higher_Purpose_Mobile_Application_Logo}",
                            '1.12884',
                            '1'
                        ],
                        [
                            "eid1889",
                            "scaleY",
                            12250,
                            411,
                            "easeInOutBack",
                            "${Higher_Purpose_Mobile_Application_Logo}",
                            '1',
                            '1.09125'
                        ],
                        [
                            "eid1893",
                            "scaleY",
                            12661,
                            339,
                            "easeInOutBack",
                            "${Higher_Purpose_Mobile_Application_Logo}",
                            '1.09125',
                            '1'
                        ],
                        [
                            "eid1875",
                            "originY",
                            12250,
                            0,
                            "easeInOutExpo",
                            "${Higher_Purpose_Mobile_Application_Logo}",
                            '5%',
                            '5%'
                        ],
                        [
                            "eid1892",
                            "originY",
                            13000,
                            0,
                            "easeInOutExpo",
                            "${Higher_Purpose_Mobile_Application_Logo}",
                            '5%',
                            '5%'
                        ]
                    ]
                }
            },
            "viewerdvd": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '444px', '614px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'OrderDVDWeb',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(237,237,237,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '444px', '614px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid1999",
                            "opacity",
                            0,
                            0,
                            "easeInOutBack",
                            "${OrderDVDWeb}",
                            '1',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-111927735");
