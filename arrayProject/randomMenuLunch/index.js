 // mendeklarasikan variabel dan menetapkan array kosong
        let lunches = []
        // membuat function menambahkan string ke akhir array
        function addLunchToEnd(arr, menu){
            arr.push(menu)
            return alert(`${menu} berhasil di tambahkan di menu makan siang.`)
        }

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
            return `Menu terpilih: ${randomMenu}`
        }

        // menampilkan menu
        function showLunchMenu(arr){
            if (arr.length == 0){
                return "The menu is empty"
            }
            const listMenu = arr.join(", ")
            return `${listMenu}`
        }

        function tambahMenu (){
            // ambil nilai input
            let getInputMenu = document.getElementById("inputMenu").value
            
            if (getInputMenu.trim() === ""){
                alert("Silahkan masukan menu terlebih dahulu!")
                return
            }
            if (lunches.includes(getInputMenu)){
                alert("Menu ini sudah ada di daftar!")
                document.getElementById("inputMenu").value = ""
                return
            }

            let addMenu = addLunchToEnd(lunches, getInputMenu)

            let menu = showLunchMenu(lunches)
            
            document.getElementById("hasilInputMenu").innerHTML = menu

            document.getElementById("inputMenu").value = ""
        }
        function hapusMenu(){
            let del = removeLastLunch(lunches)
            let menu = showLunchMenu(lunches)

            document.getElementById("hasilInputMenu").innerHTML = menu
        }

        function randomMenu(){
            let randomMenu = getRandomLunch(lunches)
            
            document.getElementById("hasilRandomMenu").innerHTML = randomMenu
        }