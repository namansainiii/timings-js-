
            //the timings will change by itself

            var clock = setInterval(clocks,1000);


            function clocks(){
                var d=new Date;
                var naman =d.toLocaleTimeString();
                document.getElementById('showclock').innerHTML=naman;
            }