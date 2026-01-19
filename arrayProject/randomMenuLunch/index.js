 // mendeklarasikan variabel dan menetapkan array kosong
        let lunches = ["sate", "bakso", "soto"]
        // membuat function menambahkan string ke akhir array
        function addLunchToEnd(arr, menu){
            arr.push(menu)
            return(`${menu} berhasil di tambahkan di menu makan siang.`)
        }
        console.log(addLunchToEnd(lunches, "Jagung"))

        // membuat function menambahkan string ke awal array
        function addLunchToStart(arr, menu) {
            arr.unshift(menu)
            return `${menu} added to the start of the lunch menu.`
        }

        // remove string terakhir
        function removeLastLunch(arr){
            if (arr.length == 0) {
                return "No lunches to remove."
            }
            const lastItem = arr.pop()
            return `${lastItem} removed from the end of the lunch menu.`
        }

        // remove string pertama
        function removeFirstString(arr){
            if (arr.length == 0){
                return "No lunches to remove"
            }
            const firstItem = arr.shift()
            return `${firstItem} removed from the start of the lunch menu.`
        }

        // mendapatkan random menu
        function getRandomLunch(arr){
            if (arr.length == 0){
                return "No lunches available."
            }
            const randomArr = Math.floor(Math.random() * arr.length)
            const randomMenu = arr[randomArr]
            return `Randomly selected lunch: ${randomMenu}`
        }

        // menampilkan menu
        function showLunchMenu(arr){
            if (arr.length == 0){
                return "The menu is empty"
            }
            const listMenu = arr.join(", ")
            return `Menu items: ${listMenu}`
        }

        function tambahMenu (){
            // ambil nilai input
            let getInputMenu = document.getElementById("inputMenu").value
            
            let addMenu = addLunchToEnd(lunches, getInputMenu)
            
            document.getElementById("hasilInputMenu").innerHTML = addMenu
        }