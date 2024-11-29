document.addEventListener('DOMContentLoaded', function() {
    // Placeholder for your exercises data array
    const exercises = [
    { "id": 58, "name": "16th - Triplet", "category": ["timing"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89e0c6a839deee50a5dc.mpeg", "sheetMusicSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89ec0fbb9131763bcd92.png", "originalTempo": 120 },  
    { "id": 61, "name": "16th - Triplet Roll", "category": ["timing", "rolls"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89e0c6a839068850a5da.mpeg", "sheetMusicSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89ecc6a839407f50a5e2.png", "originalTempo": 100 },    
    { id: 12, name: "16th 1 Accent Grid", category: ["accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/660de00d25bbbb56bc4d2d5f.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/662d5a89277a3844187db7fa.png", originalTempo: 120 },
    { id: 114, name: "16th 1 Accent Grid Backwards", category: ["accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150886041641d180957.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978f70e317ea8c6df59.png", originalTempo: 120 },
    { id: 13, name: "16th 1 Note", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db227bf7938e5bbfa864.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db2c575d67d0886dc919.png", originalTempo: 120 },
    { id: 65, name: "16th 2 Accent Grid", category: ["accent-tap"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89e048bae4e82d99a9cc.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89ecc6a83979e650a5e0.png", originalTempo: 100 },        
    { id: 115, name: "16th 2 Accent Grid Backwards", category: ["accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150d8e95d8d523af993.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978f70e314061c6df55.png", originalTempo: 100 },       
    { id: 14, name: "16th 2 Note", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db227bf793a25bbfa862.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db2c1426293e0362a113.png", originalTempo: 120 },
    { "id": 66, "name": "16th 3 Accent Grid", "category": ["accent-tap"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89e00fbb91f7043bcd86.mpeg", "sheetMusicSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89ec65c6706cd948eff6.png", "originalTempo": 100 },  
    { id: 116, name: "16th 3 Accent Grid Backwards", category: ["accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150689e40583bef71ff.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9789dd6411d7e08c59e.png", originalTempo: 100 },           
    { id: 15, name: "16th 3 Note", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db221426297e2662a10c.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db2c575d67f3896dc91e.png", originalTempo: 120 },
    { id: 108, name: "2 Accent Bucks", category: ["accent-tap", "one-handers"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150d8e95d64d73af995.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978f70e31c1e6c6df51.png", originalTempo: 110 },        
    { id: 1, name: "3 Note Rhythm Groupings", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669c9be954921d8507e7337f.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669ca489fe542b14cf507db8.png", originalTempo: 120 },
    { id: 2, name: "3 Note Stickings", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669c9be954921d11eee73380.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669caf1c5f25690b2f2ebed0.png", originalTempo: 110 },
    { id: 146, name: "3/4 Double Beat", category: ["one-handers", "rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150f70e3145d4c6e399.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978c34baefd682c7295.png", originalTempo: 110 },
    { id: 3, name: "4 Note Rhythm Groupings", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669c9be9fe542b95774f89db.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669ca4895f2569b5df2eba13.png", originalTempo: 100 },
    { id: 4, name: "4 Note Stickings", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669c9be95f2569c6022dc82d.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669cafa32477ef25560f59b3.png", originalTempo: 80 },
{ id: 98, name: "4:3 Builder Doubles", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1508860410fc0180951.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9781b64965e86358ea0.png", originalTempo: 150 },
    { id: 97, name: "4:3 Builder Paradiddle", category: ["timing", "paradiddles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150d8e95d730c3af994.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978f70e315685c6df52.png", originalTempo: 150 },
    { id: 96, name: "4:3 Builder Singles", category: ["timing", "singles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1509dd6410eae08caa7.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9781b6496e000358e9f.png", originalTempo: 150 },
    { id: 5, name: "5 Note Rhythm Groupings", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669c9be9fe542b51c74f89de.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669ca489fe542b5d24507db7.png", originalTempo: 70 },
    { id: 6, name: "5 Note Stickings", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669c9be95f2569c6262dc82e.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669caf88fe542b1de55081c7.png", originalTempo: 90 },
    { id: 128, name: "5 Stroke Roll Interp Gauntlet", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd15046a7b58b785c27e6.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978f70e310bf9c6df53.png", originalTempo: 80 },
 { id: 100, name: "5:3 Builder Paradiddle Tap", category: ["timing", "paradiddles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150689e4044cfef7206.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9781b64963b6a358e9e.png", originalTempo: 150 },
    { id: 99, name: "5:3 Builder Singles", category: ["timing", "singles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1501b6496164c3592e6.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978c34bae1cac2c72a4.png", originalTempo: 150 },
    { id: 101, name: "5:3 Builder Slurred Tap 5s", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150689e409555ef7205.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978c34bae151a2c7296.png", originalTempo: 150 },
    { id: 67, name: "5let 1 Accent Grid", category: ["accent-tap"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb8a7cc6a839490950a635.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89ecc6a839f44c50a5e1.png", originalTempo: 90 },
    { id: 117, name: "5let 1 Accent Grid Backwards", category: ["accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd15048c0c376f00c0a91.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9781b6496bfa7358e9d.png", originalTempo: 90 },      
    { id: 105, name: "5let 2 Accent Grid", category: ["accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150d8e95d81353af998.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978c34bae7f862c7298.png", originalTempo: 90 }, 
    { id: 118, name: "5let 2 Accent Grid Backwards", category: ["accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150f9358b8be81d1da9.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978c34baef0d32c729e.png", originalTempo: 90 },        
    { id: 7, name: "5let Builder", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669c9be9fe542bb0fc4f89dd.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669ca48954921d4a96e850bf.png", originalTempo: 70 },
    { id: 8, name: "6 Note Rhythm Groupings", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669c9be92477ef4fd30e6d2b.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669ca4895f256930492eba15.png", originalTempo: 60 },
    { id: 9, name: "6 Note Stickings", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669c9be953a60396d1ef1955.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669caf885f25690d392ebed2.png", originalTempo: 80 },
	{ id: 81, name: "7/8 Paradiddle", category: ["paradiddles", "78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e54916fa92976d0ed9f.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e3e6f8cbb0275b0135e.png", originalTempo: 140 }, 
 { id: 103, name: "7:3 Builder Paradiddle Diddle Tap", category: ["timing", "paradiddles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd15048c0c380f60c0a92.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9789dd641469408c598.png", originalTempo: 80 },   
    { id: 102, name: "7:3 Builder Singles", category: ["timing", "singles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150d8e95dc02f3af997.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978c34baeee0e2c72a2.png", originalTempo: 80 },
    { id: 104, name: "7:3 Builder Slurred Tap 7's", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150f70e31f883c6e39b.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978689e40bdddef6e77.png", originalTempo: 80 },     
    { id: 10, name: "7let Builder", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669c9be9fe542b52e84f89dc.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669ca4892477efff8f0f5109.png", originalTempo: 50 },
    { id: 11, name: "8th - Triplet", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669c9be953a603ae5bef1956.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669ca48954921d51e4e850c0.png", originalTempo: 150 },
    { id: 147, name: "9let Singles Grid", category: ["timing", "singles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1501b649609883592e5.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978c34baea8552c7297.png", originalTempo: 120 },
    
    { id: 16, name: "A.R.C.E", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669c9be953a60387a9ef1957.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669ca4892477ef159f0f510c.png", originalTempo: 90 },
    { id: 17, name: "Add A Flam", category: ["flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/668a21bd8f5b12421200387c.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/668a21c7c12f956967b479e8.png", originalTempo: 80 },
    { "id": 68, "name": "Add A Tap", "category": ["one-handers", "accent-tap"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89e0c6a839903b50a5db.mpeg", "sheetMusicSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89ec0fbb91bbcc3bcd96.png", "originalTempo": 80 }, 
    { id: 92, name: "BD Flams", category: ["exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150c34baecab22c76b3.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978f70e318df5c6df5b.png", originalTempo: 100 },
    { id: 94, name: "BD Triplet Partial", category: ["exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1508860410e7718094d.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9789dd641085608c5a1.png", originalTempo: 100 },
    { id: 82, name: "Blue Cheeses + Catapults", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e54c059a22f9c7c8125.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e3e15ef95b2a58155fe.png", originalTempo: 100 },  
    { id: 18, name: "Bucks", category: ["one-handers", "accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/662d5a898f22b90e433319f3.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639214e7bf793571dbe078e.png", originalTempo: 120 },
    { id: 110, name: "Bucks Filled In", category: ["accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673df733d8e95d0b7c3b5379.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978c34bae0a022c729c.png", originalTempo: 100 },                   
    { "id": 57, "name": "Bucks Hugs", "category": ["one-handers", "accent-tap"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89e065c6702bef48efec.mpeg", "sheetMusicSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89ec0fbb9132233bcd94.png", "originalTempo": 100 },
    { id: 109, name: "Buzzed Bucks", category: ["accent-tap", "one-handers"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150689e407f30ef7201.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9789dd641088e08c5a0.png", originalTempo: 80 },
    { id: 120, name: "Cheese Grid", category: ["flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1508860417f5c18094e.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978f70e318dc1c6df5a.png", originalTempo: 100 },
    { id: 123, name: "Cheese Chutichuh Grid", category: ["flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1509dd6415a9c08caa5.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9781b64960d13358ea4.png", originalTempo: 100 },
    { id: 19, name: "Cheesy Poofs", category: ["exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66b197720be03f05f81d3040.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66b1977cdc484c886232ff0f.png", originalTempo: 100 },
    { id: 20, name: "Chicken & A Roll", category: ["rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66dd305aab806e18773a24cb.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/662d5a898f22b92d543319f2.png", originalTempo: 120 },
    { id: 21, name: "Chuguduh Swiss", category: ["flams", "exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/668a21bd4a187686401d4d73.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/668a22808f5b1248070038cf.png", originalTempo: 110 },
    { id: 122, name: "Chutichuh Grid", category: ["flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1501b6496de6d3592e1.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9789dd6417c6208c5a4.png", originalTempo: 100 },
    { id: 22, name: "Colt Forty Five", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669c9be954921d84f6e7337e.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669ca4895f2569c9c82eba14.png", originalTempo: 100 },
    { id: 130, name: "Crazy 3's", category: ["accent-tap", "timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150c34bae98132c76b8.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978f70e31fc1ac6df57.png", originalTempo: 110 },
    { id: 23, name: "Crazy 5's", category: ["rolls", "exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66b19772dd126bce9be26c16.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66b1977c3129355e2473e833.png", originalTempo: 80 },
    { id: 80, name: "Deviled Eggs + Waterfalls", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6728336045079b9dea398740.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67282fd19defc9ff7a0e64c0.png", originalTempo: 120 },      
    { "id": 63, "name": "Diddle Diddle 5 9", "category": ["rolls", "exercises"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89e0c6a839f6d950a5d9.mpeg", "sheetMusicSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89ec7172d76f6173b993.png", "originalTempo": 90 },    
    { id: 137, name: "Dotted 8th - Quarter Triplet Interp Grid", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd15048c0c3c6100c0a90.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978c34bae74cc2c72a3.png", originalTempo: 110 },           
    { id: 24, name: "Double Beat", category: ["one-handers"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/662d5a89bd3e5bdc6846a019.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/660de00e25bbbbc0294d2d64.png", originalTempo: 110 },
    { id: 143, name: "Double Paradiddle Grid", category: ["paradiddles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150c34bae9f792c76b2.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9789dd6416f3b08c59a.png", originalTempo: 70 },
    { id: 144, name: "Double Paradiddle Grid Backwards", category: ["paradiddles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150c34baeaf262c76b5.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978c34bae13112c7299.png", originalTempo: 70 },
    { id: 25, name: "Down Up", category: ["one-handers"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/662d5a892d01fa46e4a7bf98.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673d4c6ca4764d32a9215e9c.png", originalTempo: 120 },
    { id: 145, name: "Egg Beater Mission", category: ["flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1509dd6416b8508caa3.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9789dd641642408c59f.png", originalTempo: 100 },
    { id: 26, name: "Eights", category: ["one-handers"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/662d5a892d01fa98a8a7bf99.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/662d5a89277a38d7607db7f8.png", originalTempo: 160 },
    { id: 27, name: "Fat Rabbit", category: ["one-handers", "timing", "exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669c9be92477ef8b710e6d29.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669ca48953a603b85bf03571.png", originalTempo: 100 },
    { id: 28, name: "Flam Accent Builder", category: ["flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/668a21bd4a18764bf11d4d74.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/668a21c7e38553c60777aeb4.png", originalTempo: 110 },
    { id: 133, name: "Flam Accent Interp Gauntlet", category: ["flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150f9358b424d1d1da8.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9781b6496dcd4358ea7.png", originalTempo: 90 },
    { id: 29, name: "Flam Accent Grid", category: ["flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/668a21bd8f5b12632a00387d.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/668a21c7e3855326d277aeb3.png", originalTempo: 100 },
    { id: 30, name: "Flam Accent Grid Backwards", category: ["flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669c62985f2569c32e2d754f.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/668a21c74a1876e7461d4d77.png", originalTempo: 100 },
    { id: 119, name: "Flam Drag Grid", category: ["flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd15046a7b5ebd65c27e4.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978c34baeef7a2c729f.png", originalTempo: 100 },
    { id: 121, name: "Flam Five Grid", category: ["flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1501b649640843592e2.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9789dd641dfc808c599.png", originalTempo: 100 },
    { id: 31, name: "Flam Tap Builder", category: ["flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/668a21bd8f5b12322a00387e.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/668a21c78f5b1226ed00387f.png", originalTempo: 90 },
    { id: 32, name: "Flams - Flam Taps", category: ["flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673f2efafbba5775cb55a93c.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/668a21c7e385535a4977aeb2.png", originalTempo: 110 },
    { id: 33, name: "Flams - Swisses", category: ["flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673f2efa387fff5bbd3e5eee.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/668a21c78f5b126785003880.png", originalTempo: 110 },
    { id: 74, name: "Flammus", category: ["flams", "exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66f8e76896de2f8b4184cb3d.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66f8e6ecf4440d18e774600e.png", originalTempo: 70 }, 
    { id: 83, name: "Fulcrum Freddie", category: ["exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e546f8cbbd5d3b01368.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e3ee92102b6053d18d9.png", originalTempo: 70 },
    { id: 34, name: "Gallop", category: ["rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/662d5a898f22b9707e3319f0.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/662d5a89ab191d7ccfd398fb.png", originalTempo: 180 },
    { id: 136, name: "Herta Builder", category: ["singles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd15046a7b580125c27e3.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978f70e319560c6df5d.png", originalTempo: 110 },
    { id: 141, name: "Herta 1 Accent Grid", category: ["singles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150c34bae07eb2c76b1.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9781b64967cb8358ea9.png", originalTempo: 90 },
    { id: 142, name: "Herta 2 Accent Grid", category: ["singles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150f70e312e11c6e397.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9789dd6417fb408c5a3.png", originalTempo: 90 },
    { id: 35, name: "Huckdigadics", category: ["one-handers", "accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639dc4a7bf7935d08bfa8fa.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db2cb47850fc232acdeb.png", originalTempo: 80 },
    { id: 36, name: "Huckgadics", category: ["one-handers", "accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/662d5a89ab191d3398d398fa.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639214eb47850cada29901e.png", originalTempo: 100 },
    { id: 37, name: "Huggadics", category: ["one-handers", "accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/662d5a898f22b9012e3319f1.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639214e790230c0fc5ecd9d.png", originalTempo: 120 },
    { id: 84, name: "Inside Paradiddle Filler", category: ["paradiddles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e54c059a270c27c8124.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e3e3a8d1118115fb785.png", originalTempo: 130 },
    { id: 135, name: "Inside Roll Interp Gauntlet", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1508860411959180950.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9789dd641e4f908c59c.png", originalTempo: 90 },
    { id: 149, name: "Inverted Flam Taps & Cheeses Builder", category: ["flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd15088604140ca18094f.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978c34bae1bdb2c72a1.png", originalTempo: 60 },
    { id: 38, name: "Inverted Huggadics", category: ["one-handers", "accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db227bf7936349bfa863.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db2c575d6773a56dc91d.png", originalTempo: 80 },
    { id: 39, name: "Irish Spring", category: ["one-handers"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db2214262955ef62a10b.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db2c575d673ce96dc91c.png", originalTempo: 140 },
    { id: 40, name: "Jedi 8's", category: ["one-handers", "timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db22142629978762a10d.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db2c575d670f776dc91a.png", originalTempo: 140 },
    { id: 41, name: "Jeepers Creepers", category: ["rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66b1bafd0be03f5b831e9bf3.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66b1977c0be03f29c41d3045.png", originalTempo: 110 },
    { id: 93, name: "Moeller Modulations", category: ["exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1501b64966c553592e3.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978c34bae79ea2c729d.png", originalTempo: 110 },
	{ id: 72, name: "Nested 5let & 7let Builder", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb9dfde3ca52f3ca61d0cd.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb9dec7172d7031d73d86b.png", originalTempo: 120 },
    { "id": 69, "name": "Nested Triplet & 5let Builder", "category": ["timing"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89e048bae4fa5999a9cb.mpeg", "sheetMusicSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89ec0fbb91057e3bcd93.png", "originalTempo": 100 }, 
    { "id": 70, "name": "Nested Triplet Builder", "category": ["timing"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89e065c670298648efed.mpeg", "sheetMusicSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb998865c67036074906a0.png", "originalTempo": 130 }, 
    { id: 148, name: "Pantera", category: ["singles", "exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150c34bae8cdc2c76b6.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978c34baecf892c729b.png", originalTempo: 70 },
    { "id": 73, "name": "Paradiddle Diddle Builder", "category": ["paradiddles"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66f64c18c293c457713f7774.mpeg", "sheetMusicSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66f64c1dc293c4b8823f7775.png", "originalTempo": 100 },
    { id: 85, name: "Paradiddle Filler", category: ["paradiddles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e54237fe460ba9a961e.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e3e6f8cbb22e5b0135f.png", originalTempo: 130 },
    { id: 127, name: "Paradiddle Interp Gauntlet", category: ["paradiddles", "timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1501b6496f0453592e4.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9781b6496a9f5358eaa.png", originalTempo: 100 },
    { id: 86, name: "Paradiddle Pyramid", category: ["paradiddles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e54353d384c0daa2b2e.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e3ee9210228ea3d18da.png", originalTempo: 120 },
    { "id": 79, "name": "PDD + PD", "category": ["paradiddles"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67282fc21e961ec8775c31dd.mpeg", "sheetMusicSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67282fcb1e961e57fd5c31df.png", "originalTempo": 70 },      
    { "id": 71, "name": "Polyrhythm Builder", "category": ["timing"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89e07172d7af0273b98b.mpeg", "sheetMusicSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89ec48bae42de899a9d9.png", "originalTempo": 100 },             
{ id: 91, name: "Satellite", category: ["exercises", "flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd15046a7b51e035c27e2.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978c34bae52f02c72a0.png", originalTempo: 150 },
    { id: 42, name: "SCV Rolls", category: ["rolls", "exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66b19772216f9fc102cb076c.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66b1977c3129351be873e832.png", originalTempo: 110 },
    { id: 43, name: "SCV Timing", category: ["timing", "exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66b19771216f9fcd47cb076b.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66b1977cdd126b2cc6e282ea.png", originalTempo: 110 },
    { id: 76, name: "Shirley Murphys + Eggbeaters", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66f8e7689090e8a9a25aacf3.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66f8e6734c8d5f94856ea1a4.png", originalTempo: 110 },
    { id: 95, name: "Singles Builder", category: ["singles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd15088604199c3180953.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978c34bae63e82c729a.png", originalTempo: 60 },  
    { id: 132, name: "Slurred Tap 5's & 9's Builder", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150689e40ffa3ef7202.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978f70e31bf81c6df5c.png", originalTempo: 110 },   
    { id: 131, name: "Slurred Tap 9's Builder", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150689e405071ef7204.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9781b64963cc4358ea3.png", originalTempo: 110 },    
    { id: 44, name: "Spanks", category: ["exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66b19771dc484cc1fd32ff0c.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66b1977c216f9f53f5cb17d0.png", originalTempo: 80 },
    { id: 45, name: "Sterling", category: ["exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66b19772dc484c162032ff0d.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66b1977c0be03f08f01d3044.png", originalTempo: 90 },
    { id: 87, name: "Stick Control", category: ["exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e54e3d971176d580f36.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67355e2de3d971b584581c2b.png", originalTempo: 80 },
    { id: 150, name: "Swiss Hitter", category: ["flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150c34bae34212c76b7.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978689e400749ef6e79.png", originalTempo: 70 },
    { id: 78, name: "Swiss Taps", category: ["flams", "exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/671ec9ddb62b363944d58a11.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/671ec9bbb62b36a9b7d58a04.png", originalTempo: 90 },      
    { id: 46, name: "Swung Bucks", category: ["one-handers", "accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db2214262980e562a10e.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db2c1426295a2e62a115.png", originalTempo: 110 },
    { id: 47, name: "Syncopated Huggadics", category: ["one-handers", "accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/662d5a892d01fa9177a7bf97.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639214ef59f86e27b072574.png", originalTempo: 100 },
    { id: 129, name: "Tap Diddle Interp Grid", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1508860417a15180955.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9781b649647f8358ea8.png", originalTempo: 110 },
    { id: 88, name: "Tap Pyramid", category: ["exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e543a8d118cd85fb78b.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e3e6f8cbbfc07b01360.png", originalTempo: 70 },
    { id: 107, name: "The Big Ten", category: ["flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673f2efaa1e7fb69e1c16787.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978689e406e7aef6e78.png", originalTempo: 90 },
	{ id: 48, name: "The Big Three", category: ["flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673f2efa7fc15f78231c7010.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/668a21c78f5b12b4d9003881.png", originalTempo: 90 },
    { id: 75, name: "Thirteen", category: ["accent-tap", "one-handers", "exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66f8e768f4440d06e074601b.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66f8e6734c8d5ff0156ea1a5.png", originalTempo: 60 },      
    { "id": 62, "name": "Triplet - 5let Roll", "category": ["timing", "rolls"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89e065c670b0fb48efea.mpeg", "sheetMusicSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89ecc6a839421950a5df.png", "originalTempo": 120 },       
    { id: 49, name: "Triplet - 8th", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669c9be92477efffbb0e6d2a.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669ca4892477ef0ee40f510a.png", originalTempo: 150 },
    { "id": 59, "name": "Triplet - 16th", "category": ["timing"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89e065c6703f5148efeb.mpeg", "sheetMusicSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89ec7172d7c61b73b992.png", "originalTempo": 120 },
    { id: 134, name: "Triplet - 16th 2 Note Timing Gauntlet", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1508860417b9a180952.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9781b64963a4b358ea6.png", originalTempo: 110 }, 
    { "id": 60, "name": "Triplet - Duple Roll", "category": ["timing", "rolls"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89e048bae4027399a9cd.mpeg", "sheetMusicSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89ec48bae4644399a9d8.png", "originalTempo": 120 },
    { id: 50, name: "Triplet 1 Accent Grid", category: ["accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/662d5a89277a38a7437db7fc.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/662d5a892d01fa25a8a7bf9d.png", originalTempo: 150 },
    { id: 111, name: "Triplet 1 Accent Grid Backwards", category: ["accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1509dd641965208caa4.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9781b6496d38b358ea2.png", originalTempo: 150 },
    { id: 51, name: "Triplet 1 Note", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db227bf793a26fbfa865.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db2c14262953d962a114.png", originalTempo: 150 },
    { "id": 64, "name": "Triplet 2 Accent Grid", "category": ["accent-tap"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89e07172d79d5c73b98c.mpeg", "sheetMusicSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89ec48bae48bbe99a9d7.png", "originalTempo": 110 },   
    { id: 112, name: "Triplet 2 Accent Grid Backwards", category: ["accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1509dd641704908caa6.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9789dd6412cf508c59d.png", originalTempo: 110 },
    { id: 52, name: "Triplet 2 Note", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db22575d6783436dc918.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db2c14262924b962a112.png", originalTempo: 150 },
    { id: 106, name: "Triplet 3 Accent Grid", category: ["accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1508860416fc7180954.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978f70e310976c6df54.png", originalTempo: 120 },
    { id: 113, name: "Triplet 3 Accent Grid Backwards", category: ["accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150c34bae7b532c76b4.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9789dd641656a08c5a2.png", originalTempo: 120 },
    { id: 53, name: "Triplet 3 Note", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db22660aba5ce884bfd0.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db2c575d67b6676dc91b.png", originalTempo: 150 },
    { id: 54, name: "Triplet 7's", category: ["rolls", "exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/660de00d4c0c5a5dee77fb90.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/662d5a89277a3851927db7ff.png", originalTempo: 120 },
    { id: 89, name: "Triplet 7's Builder", category: ["rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67355802353d3836b4aa30c0.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e3ee3d9711eda580f32.png", originalTempo: 110 },
    { id: 138, name: "Triplet Accent Interp", category: ["timing", "accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150689e40519def7203.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9781b6496670c358ea5.png", originalTempo: 120 },
    { id: 90, name: "Triplet Chicken & A Roll", category: ["rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e5415ef95543c815612.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e3e237fe4fd199a961b.png", originalTempo: 110 },
    { id: 55, name: "Triplet Diddle", category: ["rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e546f8cbb4598b01367.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/662d5a89277a3800407db7fe.png", originalTempo: 120 },
    { id: 126, name: "Triplet Diddle Interp Gauntlet", category: ["timing", "rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1508860412b4e180956.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9789dd641ea9e08c59b.png", originalTempo: 110 },
    { id: 124, name: "Tuchuduh Grid", category: ["flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150f70e31fcdcc6e39d.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978f70e314cd0c6df58.png", originalTempo: 100 },
    { id: 125, name: "Tuduchuh Grid", category: ["flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd15046a7b5684e5c27e5.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978f70e3100f1c6df56.png", originalTempo: 100 },
    { "id": 77, "name": "Universal Grip", "category": ["timing", "one-handers", "accent-tap"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/670c1437614019f7c7dfdd61.mpeg", "sheetMusicSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/670c143c8a1004707a933477.png", "originalTempo": 90 },    
    { id: 139, name: "Upbeat Triplet Builder", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150d8e95dad753af996.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/674578f1615077e478ffd0fe.png", originalTempo: 120 },
    { id: 140, name: "Upbeat Triplet Roll Builder", category: ["rolls", "timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150f70e31eb4ec6e39c.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978689e407010ef6e76.png", originalTempo: 100 },  
    { id: 56, name: "WD-40", category: ["rolls", "exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66b1b60cdc484c56da34976d.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66b1b605dd126b40c1e42a42.png", originalTempo: 110 },
        ];

    const audio = document.getElementById('audio');
    const totalTimeDisplay = document.getElementById('totalTime');
    const currentTimeDisplay = document.getElementById('currentTime');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    const volumePercentageDisplay = document.getElementById('volumePercentage');
    const tempoSlider = document.getElementById('tempoSlider');
    const tempoLabel = document.getElementById('tempoLabel');
    const exerciseSelector = document.getElementById('exerciseSelector');
    const categorySelector = document.getElementById('categorySelector');
    const sheetMusicImg = document.querySelector('.sheet-music img');
    const progressContainer = document.querySelector('.progress-bar');
    const progress = document.getElementById('progress');
    const prevExerciseBtn = document.getElementById('prevExerciseBtn');
    const nextExerciseBtn = document.getElementById('nextExerciseBtn');

    let isDragging = false;

    // Set audio.loop to true by default
    audio.loop = true;

    function formatTime(timeInSeconds) {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    }

    function updateTotalTime() {
        if (audio.duration) {
            const duration = audio.duration / audio.playbackRate;
            totalTimeDisplay.textContent = formatTime(duration);
        }
    }

    function updateCurrentTime() {
        const currentTime = audio.currentTime / audio.playbackRate;
        currentTimeDisplay.textContent = formatTime(currentTime);
    }

    function updateExerciseList(category) {
        exerciseSelector.innerHTML = '';
        const filteredExercises = exercises.filter(ex => category === 'all' || ex.category.includes(category));
        filteredExercises.forEach((exercise, index) => {
            const option = document.createElement('option');
            option.value = exercise.id;
            option.textContent = exercise.name;
            if (index === 0) {
                option.classList.add('active-option');
            }
            exerciseSelector.appendChild(option);
        });
        if (filteredExercises.length > 0) {
            initializeExercise(filteredExercises[0]); // Ensure the first exercise is loaded
        }
    }

    function initializeExercise(selectedExercise) {
        audio.src = selectedExercise.audioSrc;
        audio.preload = 'auto'; // Ensure the audio is set to preload
        audio.load(); // Load the new audio source
        sheetMusicImg.src = selectedExercise.sheetMusicSrc;
        tempoSlider.min = selectedExercise.originalTempo / 2;
        tempoSlider.max = selectedExercise.originalTempo * 2;
        tempoSlider.value = selectedExercise.originalTempo;
        tempoLabel.textContent = 'BPM: ' + selectedExercise.originalTempo;
        updatePlaybackRate();
        updateSliderBackground(tempoSlider, '#96318d', '#ffffff');
        updateSliderBackground(volumeSlider, '#96318d', '#ffffff');
        audio.onloadedmetadata = function() {
            updateTotalTime();
        };
        // Reset the progress bar
        resetProgressBar();
        // Set play button text to 'Play'
        playPauseBtn.textContent = 'Play';
        audio.pause();
        // Enable looping
        audio.loop = true;

        // Update the active option in exercise selector
        Array.from(exerciseSelector.options).forEach(option => {
            option.classList.remove('active-option');
            if (parseInt(option.value) === selectedExercise.id) {
                option.classList.add('active-option');
            }
        });
    }

    function updatePlaybackRate() {
        const currentTempo = parseInt(tempoSlider.value);
        const originalTempo = parseInt(tempoSlider.max) / 2;
        const playbackRate = currentTempo / originalTempo;
        audio.playbackRate = playbackRate;
        tempoLabel.textContent = 'BPM: ' + currentTempo;
        updateTotalTime();
        updateCurrentTime();
    }

    function resetProgressBar() {
        progress.style.width = '0%';
        currentTimeDisplay.textContent = '0:00';
        audio.currentTime = 0;
    }

    function updateSliderBackground(slider, color1, color2) {
        const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
        slider.style.background = `linear-gradient(to right, ${color1} 0%, ${color1} ${value}%, ${color2} ${value}%, ${color2} 100%)`;
    }

    audio.addEventListener('loadedmetadata', updateTotalTime);
    audio.addEventListener('ratechange', updateTotalTime);
    audio.addEventListener('ratechange', updateCurrentTime);

    categorySelector.addEventListener('change', function() {
        updateExerciseList(this.value);
    });

    exerciseSelector.addEventListener('change', function() {
        const selectedExerciseId = parseInt(this.value);
        const selectedExercise = exercises.find(ex => ex.id === selectedExerciseId);

        initializeExercise(selectedExercise);
        audio.pause();
        resetProgressBar();
        playPauseBtn.textContent = 'Play';
    });

    playPauseBtn.addEventListener('click', function() {
        if (audio.paused) {
            if (audio.readyState < 3) { // Check if audio is ready
                audio.load(); // Load the audio if not ready
            }
            audio.play().then(() => {
                this.textContent = 'Pause';
                updateProgressBarSmoothly(); // Start smooth updates
            }).catch((error) => {
                console.error('Error playing audio:', error);
                alert('Audio is not ready to play yet. Please try again in a moment.');
            });
        } else {
            audio.pause();
            this.textContent = 'Play';
        }
    });

    // Update the progress bar smoothly using requestAnimationFrame
    function updateProgressBarSmoothly() {
        if (!audio.paused) {
            const progressPercent = (audio.currentTime / audio.duration) * 100;
            progress.style.width = progressPercent + '%';
            updateCurrentTime();
            requestAnimationFrame(updateProgressBarSmoothly);
        }
    }

    // Ensure the progress bar resets instantly when audio ends
    audio.addEventListener('ended', function() {
        resetProgressBar();
        playPauseBtn.textContent = 'Play';
    });

    volumeSlider.addEventListener('input', function() {
        audio.volume = this.value;
        volumePercentageDisplay.textContent = Math.round(this.value * 100) + '%';
        updateSliderBackground(this, '#96318d', '#ffffff');
    });

    tempoSlider.addEventListener('input', function() {
        updatePlaybackRate();
        updateSliderBackground(this, '#96318d', '#ffffff');
    });

    progressContainer.addEventListener('mousedown', startDragging);
    progressContainer.addEventListener('touchstart', startDragging);

    document.addEventListener('mousemove', dragProgress);
    document.addEventListener('touchmove', dragProgress);

    document.addEventListener('mouseup', stopDragging);
    document.addEventListener('touchend', stopDragging);

    function startDragging(e) {
        isDragging = true;
        updateProgress(e);
    }

    function dragProgress(e) {
        if (isDragging) {
            updateProgress(e);
        }
    }

    function stopDragging() {
        isDragging = false;
    }

    function updateProgress(e) {
        const rect = progressContainer.getBoundingClientRect();
        let x;
        if (e.type.startsWith('touch')) {
            x = e.touches[0].clientX - rect.left;
        } else {
            x = e.clientX - rect.left;
        }
        const width = progressContainer.clientWidth;
        let clickedValue = (x / width);
        clickedValue = Math.min(1, Math.max(0, clickedValue));
        audio.currentTime = clickedValue * audio.duration;
        updateProgressBar();
    }

    function updateProgressBar() {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progress.style.width = progressPercent + '%';
        updateCurrentTime();
    }

    // Set the category to 'all' on page load
    categorySelector.value = 'all';
    updateExerciseList('all');

    // Exercise Navigation Buttons
    prevExerciseBtn.addEventListener('click', function() {
        navigateExercise(-1);
    });

    nextExerciseBtn.addEventListener('click', function() {
        navigateExercise(1);
    });

    function navigateExercise(direction) {
        // direction: -1 for previous, 1 for next
        const currentIndex = exerciseSelector.selectedIndex;
        const totalOptions = exerciseSelector.options.length;

        let newIndex = currentIndex + direction;

        if (newIndex < 0) {
            newIndex = totalOptions - 1; // Wrap to last
        } else if (newIndex >= totalOptions) {
            newIndex = 0; // Wrap to first
        }

        exerciseSelector.selectedIndex = newIndex;

        const selectedExerciseId = parseInt(exerciseSelector.value);
        const selectedExercise = exercises.find(ex => ex.id === selectedExerciseId);

        initializeExercise(selectedExercise);
        audio.pause();
        resetProgressBar();
        playPauseBtn.textContent = 'Play';
    }
});