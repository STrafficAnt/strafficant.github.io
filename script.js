document.addEventListener('DOMContentLoaded', function () {

    const calendarEl = document.getElementById('calendar');

    const calendar = new FullCalendar.Calendar(calendarEl, {

        locale:'ko',

        initialView:'dayGridMonth',

        height:'auto',

        headerToolbar:{
            left:'prev,next today',
            center:'title',
            right:'dayGridMonth,timeGridWeek,listMonth'
        },

        buttonText:{
            today:'오늘',
            month:'월',
            week:'주',
            list:'목록'
        },

        events:[

            {
                title:'2분기 실적발표',
                start:'2026-07-20',
                color:'#E53935'
            },

            {
                title:'철도사업 입찰',
                start:'2026-08-05',
                color:'#1E88E5'
            },

            {
                title:'에스디시스템 합병',
                start:'2026-09-01',
                color:'#43A047'
            }

        ]

    });

    calendar.render();

});
