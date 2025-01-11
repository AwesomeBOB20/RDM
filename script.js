document.addEventListener('DOMContentLoaded', function() {
    // Placeholder for your exercises data array
    const exercises = [
    
    { id: 108, name: "2 Accent Bucks", category: ["accent-tap", "one-handers"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150d8e95d64d73af995.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978f70e31c1e6c6df51.png", originalTempo: 110 },        
    { id: 1, name: "3 Note Rhythm Groupings", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669c9be954921d8507e7337f.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669ca489fe542b14cf507db8.png", originalTempo: 120 },
    { id: 2, name: "3 Note Stickings", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669c9be954921d11eee73380.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669caf1c5f25690b2f2ebed0.png", originalTempo: 110 },
    { id: 146, name: "3/4 Double Beat", category: ["one-handers", "rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150f70e3145d4c6e399.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978c34baefd682c7295.png", originalTempo: 110 },
    { id: 3, name: "4 Note Rhythm Groupings", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669c9be9fe542b95774f89db.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669ca4895f2569b5df2eba13.png", originalTempo: 100 },
    { id: 4, name: "4 Note Stickings", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669c9be95f2569c6022dc82d.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669cafa32477ef25560f59b3.png", originalTempo: 80 },
    { id: 180, name: "4:3 Accents", category: ["timing", "accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675aab435f5b9597e2f07734.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675aab3bda8c39260641cbf7.png", originalTempo: 160},
    { id: 98, name: "4:3 Builder Doubles", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1508860410fc0180951.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9781b64965e86358ea0.png", originalTempo: 150 },
    { id: 97, name: "4:3 Builder Paradiddle", category: ["timing", "paradiddles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150d8e95d730c3af994.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978f70e315685c6df52.png", originalTempo: 150 },
    { id: 96, name: "4:3 Builder Singles", category: ["timing", "singles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1509dd6410eae08caa7.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9781b6496e000358e9f.png", originalTempo: 150 },
        { id: 289, name: "4:3s", category: ["rhythms"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b0be84abff61c5abe3.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a1f9e1e1a4f2191fb5.png", originalTempo: 160 },

    { id: 171, name: "4let Roll Builder", category: ["rolls", "timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675f47e1db465671b7faba08.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675f47ebea029a9c8aa402b2.png", originalTempo: 120},
    { id: 5, name: "5 Note Rhythm Groupings", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669c9be9fe542b51c74f89de.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669ca489fe542b5d24507db7.png", originalTempo: 70 },
    { id: 6, name: "5 Note Stickings", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669c9be95f2569c6262dc82e.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669caf88fe542b1de55081c7.png", originalTempo: 90 },
    { id: 128, name: "5 Stroke Roll Interp Gauntlet", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd15046a7b58b785c27e6.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978f70e310bf9c6df53.png", originalTempo: 80 },
    { id: 151, name: "5/4 Double Beat", category: ["one-handers"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6757419bda8c391b0f3d27f6.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67582f51b5c0941df551501a.png", originalTempo: 110 },
    { id: 181, name: "5:3 Accents", category: ["timing", "accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675aab433772bd0e8e838ae7.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675aab3b3772bd12b4838ae4.png", originalTempo: 140},
    { id: 100, name: "5:3 Builder Paradiddle Tap", category: ["timing", "paradiddles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150689e4044cfef7206.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9781b64963b6a358e9e.png", originalTempo: 150 },
    { id: 99, name: "5:3 Builder Singles", category: ["timing", "singles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1501b6496164c3592e6.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978c34bae1cac2c72a4.png", originalTempo: 150 },
    { id: 101, name: "5:3 Builder Slurred Tap 5s", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150689e409555ef7205.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978c34bae151a2c7296.png", originalTempo: 150 },
        { id: 290, name: "5:3s", category: ["rhythms"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b0be84ab060fc5abe2.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a13cda55318541da6c.png", originalTempo: 150 },

    { id: 269, name: "5:6 Builder", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676d141b2ec4ebe57a4d18a1.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676d141695ee4b8b48d228c9.png", originalTempo: 120 },
        { id: 291, name: "5:6s", category: ["rhythms"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b0f9e1e132b5191fce.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a13cda55fa7941da6d.png", originalTempo: 130 },
    
    { id: 67, name: "5let 1 Accent Grid", category: ["accent-tap"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb8a7cc6a839490950a635.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89ecc6a839f44c50a5e1.png", originalTempo: 90 },
    { id: 117, name: "5let 1 Accent Grid Backwards", category: ["accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd15048c0c376f00c0a91.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9781b6496bfa7358e9d.png", originalTempo: 90 },      
    { id: 105, name: "5let 2 Accent Grid", category: ["accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150d8e95d81353af998.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978c34bae7f862c7298.png", originalTempo: 90 }, 
    { id: 118, name: "5let 2 Accent Grid Backwards", category: ["accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150f9358b8be81d1da9.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978c34baef0d32c729e.png", originalTempo: 90 },        
        { id: 292, name: "5let - 8th 5let Roll", category: ["timing", "rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b08238244525dbeb39.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a181255b9c4d0a8213.png", originalTempo: 90 },
        { id: 293, name: "5let - 16th Roll", category: ["timing", "rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b03cda552a0041da8b.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a1be84ab3205c5abc4.png", originalTempo: 80 },
        { id: 294, name: "5let - Duple Roll", category: ["timing", "rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b0823824f7c8dbeb33.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a13cda55534041da6e.png", originalTempo: 100 },
        { id: 295, name: "5let - Triplet Roll", category: ["timing", "rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b0823824e621dbeb34.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a181255b66860a8214.png", originalTempo: 90 },
    
    { id: 7, name: "5let Builder", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669c9be9fe542bb0fc4f89dd.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669ca48954921d4a96e850bf.png", originalTempo: 70 },
        { id: 319, name: "5lets", category: ["rhythms"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b03cda55af6741da85.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a1f9e1e109b9191fbc.png", originalTempo: 90 },
    
    { id: 8, name: "6 Note Rhythm Groupings", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669c9be92477ef4fd30e6d2b.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669ca4895f256930492eba15.png", originalTempo: 60 },
    { id: 9, name: "6 Note Stickings", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669c9be953a60396d1ef1955.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669caf885f25690d392ebed2.png", originalTempo: 80 },
        { id: 296, name: "6lets", category: ["rhythms"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b03cda5513f441da82.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a1f9e1e1278d191fb9.png", originalTempo: 70 },
      
    { id: 188, name: "7/8 4let - 5let", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697102b2eae1e689dfd39d.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697109469351628555a334.png", originalTempo: 110 },  
    { id: 189, name: "7/8 4let - 8th", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6769710246935176a355a32e.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971090bcca07124806cc5.png", originalTempo: 140 },  
    { id: 190, name: "7/8 4let - Triplet", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697102fb63bcf1636d4731.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971097e62111d90b26373.png", originalTempo: 140 },  
    { id: 191, name: "7/8 4lets", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971020bcca02392806cb7.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697109fb63bc03ad6d473b.png", originalTempo: 140 },  
    { id: 194, name: "7/8 5let - 4let", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697102087a9c5c8129b9aa.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971097e621136f9b26372.png", originalTempo: 110 },  
    { id: 192, name: "7/8 5let - 5:3", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bceb2540e178c975f800a.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bceb895ee4b5649d12550.png", originalTempo: 110 },  
    { id: 193, name: "7/8 5let - 8th", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697102f81de4744caa4deb.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697109b2eae10891dfd3a9.png", originalTempo: 110 },  
    { id: 195, name: "7/8 5let - Triplet", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971027e6211210cb2636d.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697109b2eae15dbfdfd3a7.png", originalTempo: 110 },  
    { id: 196, name: "7/8 5lets", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6769710260f859c6470f1192.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697109fb63bc9e8f6d473c.png", originalTempo: 110 },  
    { id: 197, name: "7/8 8th - 4let", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971027e6211c37cb2636b.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971097e621112a5b26375.png", originalTempo: 140 },  
    { id: 198, name: "7/8 8th - 5:3", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697102fb63bce12a6d4732.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697109fb63bc110e6d473a.png", originalTempo: 150 },  
    { id: 199, name: "7/8 8th - 5let", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697102db171c7811c6d61b.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971092fc1955dcd4bf1a3.png", originalTempo: 110 },  
    { id: 252, name: "7/8 8th - Deviled Eggs", category: ["78-grids", "hybrids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfbf540e17b7b35f842b.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfb395ee4bfe7ed12a3a.png", originalTempo: 120 },  
    { id: 200, name: "7/8 8th - Triplet", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971024693516e7a55a331.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697109db171c143dc6d621.png", originalTempo: 140 },  
    { id: 82, name: "7/8 Blue Cheeses - Catapults", category: ["78-grids", "hybrids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e54c059a22f9c7c8125.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e3e15ef95b2a58155fe.png", originalTempo: 100 },  
    { id: 253, name: "7/8 Blue Cheeses - Waterfalls", category: ["78-grids", "hybrids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfbf540e17a1e55f8428.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfb4cd5e72fe0cc7bac4.png", originalTempo: 120 },  
    { id: 156, name: "7/8 Book Report Thing", category: ["78-grids", "hybrids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832cfb1300c01825ed3fa.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832c0da8c393de93ebf36.png", originalTempo: 70},
    { id: 201, name: "7/8 Cheeses", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697102db171c6c1bc6d618.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697109db171ce0aac6d620.png", originalTempo: 140 },  
    { id: 80, name: "7/8 Deviled Eggs - Waterfalls", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6728336045079b9dea398740.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67282fd19defc9ff7a0e64c0.png", originalTempo: 120 },      
    { id: 202, name: "7/8 Drags", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697102b2eae18140dfd3a0.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971090bcca02790806cc2.png", originalTempo: 150 },  
    { id: 261, name: "7/8 Eggbeater Combo - Paradiddle Diddles", category: ["78-grids", "hybrids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfbfcd5e720a05c7bac6.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfb32ec4eb536b4c1d2a.png", originalTempo: 110 },  
    { id: 256, name: "7/8 Eggbeater Combo - Shirley Murphys", category: ["78-grids", "hybrids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfbf540e174b0e5f8427.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfb495ee4b225fd12a3b.png", originalTempo: 110 },  
    { id: 262, name: "7/8 Eggbeater Modulation", category: ["78-grids", "hybrids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfbf95ee4b38c4d12a42.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfb495ee4b98e2d12a3d.png", originalTempo: 110 },  
    { id: 259, name: "7/8 Eggbeater Turnaround", category: ["78-grids", "hybrids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfbf95ee4bb11ed12a43.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfb4540e175f015f8421.png", originalTempo: 110 },  
    { id: 203, name: "7/8 Flam Accents", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697102b2eae15da4dfd39c.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971090bcca0a21d806cc3.png", originalTempo: 170 },  
    { id: 204, name: "7/8 Flam Drags", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971027e62111dacb2636c.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6769710960f859aa5c0f119e.png", originalTempo: 140 },  
    { id: 260, name: "7/8 Flam Drags - Double Flam Drags", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfbfcd5e7271c4c7bac5.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfb47a5c4c0a77685d2d.png", originalTempo: 100 },  
    { id: 157, name: "7/8 Flam Five Pataflaflas - Flam Fives", category: ["78-grids", "hybrids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832cf53bb95df57aba9e1.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832c00700718425f456f8.png", originalTempo: 130},
    { id: 205, name: "7/8 Flam Fives", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6769710260f85979d10f1193.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697109087a9c650a29b9b1.png", originalTempo: 140 },  
    { id: 206, name: "7/8 Flam Taps - Flam Accents", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971020bcca01f74806cb9.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971092fc19577dd4bf19f.png", originalTempo: 170 },  
    { id: 207, name: "7/8 Flam Taps - Flam-Flam Taps", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697102f81de49380aa4dec.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697109f81de46c09aa4df7.png", originalTempo: 170 },  
    { id: 208, name: "7/8 Flam Taps - Swisses", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697102db171c311cc6d619.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697109b2eae12f4fdfd3ab.png", originalTempo: 170 },  
    { id: 209, name: "7/8 Flamacues - Flam Accents", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697102f81de4e317aa4ded.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971097e6211a1d6b26376.png", originalTempo: 150 },  
    { id: 247, name: "7/8 Flammed 3's Thing", category: ["78-grids", "hybrids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfbf7a5c4c35ed686071.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfb4540e179a175f8422.png", originalTempo: 90 },  
    { id: 210, name: "7/8 Flammed Doubles - Flammed 3's", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697102b2eae13e67dfd39b.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971097e62118592b26377.png", originalTempo: 130 },  
    { id: 211, name: "7/8 Floppy Flams - Flammed 3's", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6769710246935153a255a32f.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697109b2eae14e41dfd3a8.png", originalTempo: 130 },  
    { id: 265, name: "7/8 Herta Modulation", category: ["78-grids", "hybrids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfbf95ee4b5c8ad12a40.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfb4cd5e72ed88c7bac3.png", originalTempo: 100 },  
    { id: 250, name: "7/8 Herta Modulation w/ Accents", category: ["78-grids", "hybrids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfbfcd5e727c68c7bac7.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfb4540e1701c85f8424.png", originalTempo: 100 },  
    { id: 212, name: "7/8 Hertas", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697102b2eae1f4dfdfd39e.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697109f81de474a5aa4df9.png", originalTempo: 150 },  
    { id: 213, name: "7/8 Invert Cheeses - Cheese Chutichuhs", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6769710260f85997060f1199.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971092fc1950c954bf1a2.png", originalTempo: 130 },  
    { id: 214, name: "7/8 Invert Cheeses - Cheese Fubars", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971027e62119b3bb2636e.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971090bcca0556a806cc4.png", originalTempo: 130 },  
    { id: 215, name: "7/8 Invert Cheeses - Cheeses", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971022fc195635c4bf198.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971092fc195a7db4bf19e.png", originalTempo: 130 },  
    { id: 216, name: "7/8 Invert Flam Taps - Chutichuhs", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697102db171cb1fbc6d61a.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697109f81de482fcaa4df8.png", originalTempo: 130 },  
    { id: 217, name: "7/8 Invert Flam Taps - Flam Accents", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6769710260f85985020f1196.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6769710960f85944e00f119c.png", originalTempo: 150 },  
    { id: 218, name: "7/8 Invert Flam Taps - Fubars", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697102087a9c139029b9ab.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971094693517d2155a337.png", originalTempo: 130 },  
    { id: 219, name: "7/8 Legatos - Doubles", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697102f81de455e6aa4df2.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697109f81de44d88aa4df6.png", originalTempo: 130 },  
    { id: 220, name: "7/8 Para-rolls - Grandmas", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697102087a9c67cd29b9ae.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6769710960f859b66d0f119f.png", originalTempo: 150 },  
    { id: 221, name: "7/8 Para-rolls - Inside Paradiddle Diddles", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971024693515e2355a330.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971092fc195e9144bf1a5.png", originalTempo: 150 },  
    { id: 222, name: "7/8 Para-rolls - Paradiddle Diddles", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6769710260f85932e10f1195.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971090bcca09ef1806cc7.png", originalTempo: 150 },  
    { id: 223, name: "7/8 Para-rolls - Pudadas", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697102db171cf5f3c6d61d.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697109f81de45f05aa4dfb.png", originalTempo: 150 },  
    { id: 224, name: "7/8 Para-rolls - Shirley Murphys", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6769710260f8598d090f1198.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697109fb63bc070f6d473f.png", originalTempo: 150 },  
    { id: 81, name: "7/8 Paradiddle", category: ["paradiddles", "78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e54916fa92976d0ed9f.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e3e6f8cbb0275b0135e.png", originalTempo: 140 }, 
    { id: 257, name: "7/8 Paradiddle Flam Thing", category: ["78-grids", "hybrids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfbf2ec4eb5ba84c1d35.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfb47a5c4cad55685d30.png", originalTempo: 100 },  
    { id: 255, name: "7/8 Paradiddle Modulation", category: ["78-grids", "hybrids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfbf95ee4bd0f1d12a44.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfb42ec4ebc4614c1d2e.png", originalTempo: 140 },  
    { id: 254, name: "7/8 Paradiddle Upstroke", category: ["78-grids", "hybrids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfbf540e173e3e5f8429.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfb47a5c4c44e3685d2f.png", originalTempo: 140 },  
    { id: 263, name: "7/8 Paradiddles - Fat Muffins", category: ["78-grids", "hybrids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfbf2ec4ebfca54c1d34.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfb495ee4b0bc9d12a3c.png", originalTempo: 140 },  
    { id: 225, name: "7/8 Paradiddles - Grandmas", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6769710260f8599f530f1194.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971097e62110163b26374.png", originalTempo: 150 },  
    { id: 226, name: "7/8 Paradiddles - Inside Paradiddle Diddles", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971020bcca0c1fb806cb8.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697109db171c8e55c6d623.png", originalTempo: 150 },  
    { id: 227, name: "7/8 Paradiddles - Paradiddle Diddles", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697102f81de4280eaa4def.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697109469351a66555a336.png", originalTempo: 150 },  
    { id: 228, name: "7/8 Paradiddles - Pudadas", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697102db171c38abc6d61c.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971094693516e8855a33a.png", originalTempo: 150 },  
    { id: 229, name: "7/8 Paradiddles - Shirley Murphys", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697102f81de46e89aa4dee.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971097e62116c20b26378.png", originalTempo: 150 },  
    { id: 76, name: "7/8 Shirley Temples - Eggbeaters", category: ["78-grids", "hybrids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66f8e7689090e8a9a25aacf3.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66f8e6734c8d5f94856ea1a4.png", originalTempo: 110 },
    { id: 230, name: "7/8 Single Stroke 5's", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697102087a9c2de329b9ac.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971092fc1953d684bf1a1.png", originalTempo: 140 },  
    { id: 232, name: "7/8 Singles", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6769710260f85950db0f1197.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697109f81de4190eaa4dfc.png", originalTempo: 140 },  
    { id: 231, name: "7/8 Singles - Doubles", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697102b2eae1ea68dfd39f.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971090bcca02c9e806cc8.png", originalTempo: 130 },  
    { id: 233, name: "7/8 Slow Paradiddles - Grandmas", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971032fc1952e574bf19b.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6769710960f859fc260f119d.png", originalTempo: 150 },  
    { id: 234, name: "7/8 Slow Paradiddles - Inside Paraiddle Diddles", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971020bcca0ebf9806cba.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971090bcca0b899806cc6.png", originalTempo: 150 },  
    { id: 235, name: "7/8 Slow Paradiddles - Paraiddle Diddles", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697102b2eae1c9c3dfd3a3.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697109469351954e55a339.png", originalTempo: 150 },  
    { id: 236, name: "7/8 Slow Paradiddles - Pudadas", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697102087a9c326d29b9ad.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697109469351f93c55a338.png", originalTempo: 150 },  
    { id: 237, name: "7/8 Slow Paradiddles - Shirley Murphys", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971022fc195fa6c4bf199.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697109fb63bc4e016d473d.png", originalTempo: 150 },  
    { id: 238, name: "7/8 Stock", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971022fc195d0374bf19a.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697109f81de45a70aa4dfa.png", originalTempo: 220 },  
    { id: 264, name: "7/8 Swiss Thing", category: ["78-grids", "hybrids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfbf95ee4b4a51d12a41.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfb42ec4eb9eb04c1d2d.png", originalTempo: 130 },  
    { id: 249, name: "7/8 Swiss Thing w/ Kick", category: ["78-grids", "hybrids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfbf7a5c4ca915686052.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfb495ee4b020cd12a3e.png", originalTempo: 120 },  
    { id: 251, name: "7/8 Tap 5's", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfbf540e1704e05f842a.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfb42ec4eb3bd84c1d2b.png", originalTempo: 110 },         
    { id: 248, name: "7/8 Tap 5's - Para-rolls", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfbf540e1728a55f8426.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfb4540e1732c65f8423.png", originalTempo: 110 },  
    { id: 258, name: "7/8 Tap 5's - Tap Rolls", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfbf2ec4eb5d874c1d33.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfb42ec4ebe9094c1d2c.png", originalTempo: 110 },  
    { id: 239, name: "7/8 Tap Drags", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697102fb63bcc4936d4733.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971097e62115326b26379.png", originalTempo: 140 },  
    { id: 240, name: "7/8 Tap Rolls", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697102f81de40790aa4df1.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697109b2eae1d27cdfd3ac.png", originalTempo: 140 },  
    { id: 243, name: "7/8 Triplet - 4let", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697103469351071c55a332.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697109b2eae1e763dfd3aa.png", originalTempo: 140 },  
    { id: 244, name: "7/8 Triplet - 5:3", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697102087a9ca08029b9af.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676971092fc19573b74bf1a4.png", originalTempo: 150 },  
    { id: 241, name: "7/8 Triplet - 5let", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697102f81de4031aaa4df0.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697109db171c7606c6d622.png", originalTempo: 110 },  
    { id: 242, name: "7/8 Triplet - 8th", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697102b2eae16740dfd3a2.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697109087a9c82ec29b9b2.png", originalTempo: 140 },  
    { id: 246, name: "7/8 Triplet Roll Combo", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfbf7a5c4c79db686015.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676bdfb47a5c4ce8bc685d2e.png", originalTempo: 110 },  
    { id: 245, name: "7/8 Triplets", category: ["78-grids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697103b2eae17381dfd3a4.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67697109fb63bc09a26d473e.png", originalTempo: 140 },  

    { id: 103, name: "7:3 Builder Paradiddle Diddle Tap", category: ["timing", "paradiddles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd15048c0c380f60c0a92.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9789dd641469408c598.png", originalTempo: 80 },   
    { id: 102, name: "7:3 Builder Singles", category: ["timing", "singles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150d8e95dc02f3af997.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978c34baeee0e2c72a2.png", originalTempo: 80 },
    { id: 104, name: "7:3 Builder Slurred Tap 7's", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150f70e31f883c6e39b.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978689e40bdddef6e77.png", originalTempo: 80 },     
        { id: 297, name: "7:3s", category: ["rhythms"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b0f9e1e19737191fcf.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a1823824e176dbeb25.png", originalTempo: 90 },
        { id: 298, name: "7:6s", category: ["rhythms"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b0be84ab0ca2c5abe4.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a1823824516edbeb29.png", originalTempo: 120 },
    
    { id: 10, name: "7let Builder", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669c9be9fe542b52e84f89dc.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669ca4892477efff8f0f5109.png", originalTempo: 50 },
        { id: 299, name: "7lets", category: ["rhythms"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b0823824a059dbeb35.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a18238240a62dbeb27.png", originalTempo: 120 },
        { id: 300, name: "8:6s", category: ["rhythms"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b0f9e1e17801191fd0.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a1be84abd62dc5abc7.png", originalTempo: 90 },
        { id: 302, name: "8th - 8th 5let", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b081255b41ad0a8226.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a13cda55301d41da6f.png", originalTempo: 160 },
        { id: 301, name: "8th - 8th 5let Roll", category: ["rolls", "timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b03cda55b96341da8a.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a182382448d3dbeb2a.png", originalTempo: 120 },
        { id: 304, name: "8th - 16th", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b0f9e1e1057a191fcd.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a1823824fe4edbeb28.png", originalTempo: 120 },
        { id: 303, name: "8th - 16th Roll", category: ["timing", "rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b03cda55f2b841da84.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a1823824572bdbeb26.png", originalTempo: 80 },
        { id: 305, name: "8th - Duple Roll", category: ["timing", "rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b03cda5535d541da86.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a13cda55846c41da70.png", originalTempo: 150 },
    { id: 11, name: "8th - Triplet", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669c9be953a603ae5bef1956.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669ca48954921d51e4e850c0.png", originalTempo: 150 },        
        { id: 306, name: "8th - Triplet Roll", category: ["timing", "rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b0be84abe57bc5abe7.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a1f9e1e14ae6191fb6.png", originalTempo: 110 },
        { id: 307, name: "8th 5let - 5let", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/678170ef35c9095f8f7e1bfd.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a181255b01840a8219.png", originalTempo: 80 },
        { id: 309, name: "8th 5let - 16th", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b081255b0f290a8225.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a1f9e1e1aabf191fb7.png", originalTempo: 130 },
        { id: 308, name: "8th 5let - 16th Roll", category: ["timing", "rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/678170efcac71d6f975f395d.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a1f9e1e1c7ed191fba.png", originalTempo: 80 },
        { id: 310, name: "8th 5let - Duple Roll", category: ["timing", "rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b03cda557bff41da87.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a1be84abe33dc5abc6.png", originalTempo: 160 },
        { id: 312, name: "8th 5let - Triplet", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b081255bf5650a822c.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a13cda55340b41da72.png", originalTempo: 150 },
        { id: 311, name: "8th 5let - Triplet Roll", category: ["timing", "rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b0f9e1e1dc38191fd3.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a1be84ab96cac5abcd.png", originalTempo: 110 },
        { id: 313, name: "8th 5let Roll - 16th Roll", category: ["timing", "rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b03cda55b9c641da83.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a1be84ab288dc5abc5.png", originalTempo: 80 },
        { id: 291, name: "8th 5lets", category: ["rhythms"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67788b79c290c60a0bbff9fc.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67788b867e4aa68342b96a4d.png", originalTempo: 180},
   
    { id: 290, name: "8ths", category: ["rhythms"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67788b7910dd0d6595904b8f.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67788b867e4aa63a8cb96a51.png", originalTempo: 200},
        { id: 314, name: "9let Builder", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6781c09ff9e1e174d11a8a2f.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6781c0aebe84ab64a3c72c2a.png", originalTempo: 180 },
    
    { id: 147, name: "9let Singles", category: ["timing", "singles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1501b649609883592e5.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978c34baea8552c7297.png", originalTempo: 120 },
    
    { id: 292, name: "9lets", category: ["rhythms"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67788b79fb9edb87b70fda91.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67788b867e4aa6ac44b96a4f.png", originalTempo: 100},
        { id: 315, name: "16th - 5let", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b0f9e1e1e8a2191fcc.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a181255b43f80a821d.png", originalTempo: 80 },
        { id: 316, name: "16th - 8th 5let Roll", category: ["timing", "rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b0f9e1e1e778191fd4.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a18238245a65dbeb2d.png", originalTempo: 110 },
        { id: 317, name: "16th - 16th Roll", category: ["timing", "rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b0f9e1e16dd0191fd1.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a1f9e1e19a80191fb8.png", originalTempo: 120 },
        { id: 318, name: "16th - Duple Roll", category: ["timing", "rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b03cda5515f441da81.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a181255ba1b60a8215.png", originalTempo: 120 },
    
    { "id": 61, "name": "16th - Triplet Roll", "category": ["timing", "rolls"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89e0c6a839068850a5da.mpeg", "sheetMusicSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89ecc6a839407f50a5e2.png", "originalTempo": 100 },    
    { id: 12, name: "16th 1 Accent Grid", category: ["accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/660de00d25bbbb56bc4d2d5f.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/662d5a89277a3844187db7fa.png", originalTempo: 120 },
    { id: 114, name: "16th 1 Accent Grid Backwards", category: ["accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150886041641d180957.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978f70e317ea8c6df59.png", originalTempo: 120 },
    { id: 13, name: "16th 1 Note", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db227bf7938e5bbfa864.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db2c575d67d0886dc919.png", originalTempo: 120 },
    { id: 65, name: "16th 2 Accent Grid", category: ["accent-tap"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89e048bae4e82d99a9cc.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89ecc6a83979e650a5e0.png", originalTempo: 100 },        
    { id: 115, name: "16th 2 Accent Grid Backwards", category: ["accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150d8e95d8d523af993.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978f70e314061c6df55.png", originalTempo: 100 },       
    { id: 14, name: "16th 2 Note", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db227bf793a25bbfa862.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db2c1426293e0362a113.png", originalTempo: 120 },
    { id: 66, name: "16th 3 Accent Grid", category: ["accent-tap"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89e00fbb91f7043bcd86.mpeg", "sheetMusicSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89ec65c6706cd948eff6.png", "originalTempo": 100 },  
    { id: 116, name: "16th 3 Accent Grid Backwards", category: ["accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150689e40583bef71ff.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9789dd6411d7e08c59e.png", originalTempo: 100 },           
    { id: 15, name: "16th 3 Note", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db221426297e2662a10c.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db2c575d67f3896dc91e.png", originalTempo: 120 },
    { id: 153, name: "16th Diddles", category: ["rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832cf53bb9520feaba9e3.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832c0988a5f369aa39a68.png", originalTempo: 100 },
    { id: 154, name: "16th Taps Gauntlet", category: ["accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832cf988a5f7617a39a77.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832c0da8c3971c83ebf35.png", originalTempo: 100},
    { id: 286, name: "16ths", category: ["rhythms"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67788b796b70ca1f5c5376ae.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67788b86584f3a2d94a39314.png", originalTempo: 150},
        { id: 320, name: "32nds", category: ["rhythms"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b08238246af8dbeb37.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a13cda55093041da73.png", originalTempo: 60 },
    
    { id: 16, name: "A.R.C.E", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669c9be953a60387a9ef1957.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669ca4892477ef159f0f510c.png", originalTempo: 90 },
        { id: 321, name: "Add A Decay", category: ["one-handers", "natural-decays"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b0f9e1e1812d191fd2.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a1be84ab3d2dc5abce.png", originalTempo: 80 },
    
    { id: 17, name: "Add A Flam", category: ["flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/668a21bd8f5b12421200387c.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/668a21c7c12f956967b479e8.png", originalTempo: 80 },
    { id: 155, name: "Add A Note", category: ["one-handers"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832cf988a5f286ba39a76.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832c053bb956df6aba9d3.png", originalTempo: 70},
    { "id": 68, "name": "Add A Tap", "category": ["one-handers", "accent-tap"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89e0c6a839903b50a5db.mpeg", "sheetMusicSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89ec0fbb91bbcc3bcd96.png", "originalTempo": 80 }, 
    { id: 272, name: "Basic Rhythms Etude #1", category: ["etudes"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67788b79b0a11f3746c11293.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6773ea604f495e2d51e93e1d.png", originalTempo: 80 },
    { id: 273, name: "Basic Rhythms Etude #2", category: ["etudes"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67788b7951e7486ac866b881.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6773e101c7fbee1b0a3d6b96.png", originalTempo: 80 },
    { id: 92, name: "BD Flams", category: ["exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150c34baecab22c76b3.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978f70e318df5c6df5b.png", originalTempo: 100 },
    { id: 94, name: "BD Triplet Partial", category: ["exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1508860410e7718094d.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9789dd641085608c5a1.png", originalTempo: 100 },
    { id: 274, name: "Book Report Builder", category: ["hybrids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6773e0f34aceab0b0244413c.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6773e10104db6d44dbeea92a.png", originalTempo: 70 },
    { id: 18, name: "Bucks", category: ["one-handers", "accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/662d5a898f22b90e433319f3.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639214e7bf793571dbe078e.png", originalTempo: 120 },
    { id: 110, name: "Bucks Filled In", category: ["accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673df733d8e95d0b7c3b5379.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978c34bae0a022c729c.png", originalTempo: 100 },                   
    { "id": 57, "name": "Bucks Hugs", "category": ["one-handers", "accent-tap", "natural-decays"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89e065c6702bef48efec.mpeg", "sheetMusicSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89ec0fbb9132233bcd94.png", "originalTempo": 100 },
    { id: 109, name: "Buzzed Bucks", category: ["accent-tap", "one-handers"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150689e407f30ef7201.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9789dd641088e08c5a0.png", originalTempo: 80 },
    { id: 275, name: "Catapult Builder", category: ["hybrids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6773e0f39be26b3c4e4bd1a4.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6773e101c7fbeecb7c3d6b97.png", originalTempo: 60 },
    { id: 120, name: "Cheese Grid", category: ["flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1508860417f5c18094e.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978f70e318dc1c6df5a.png", originalTempo: 100 },
    { id: 123, name: "Cheese Chutichuh Grid", category: ["flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1509dd6415a9c08caa5.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9781b64960d13358ea4.png", originalTempo: 100 },
    { id: 19, name: "Cheesy Poofs", category: ["exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66b197720be03f05f81d3040.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66b1977cdc484c886232ff0f.png", originalTempo: 100 },
    { id: 20, name: "Chicken & A Roll", category: ["rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66dd305aab806e18773a24cb.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/662d5a898f22b92d543319f2.png", originalTempo: 120 },
    { id: 21, name: "Chuggada Swiss", category: ["flams", "exercises", "natural-decays"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/668a21bd4a187686401d4d73.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/668a22808f5b1248070038cf.png", originalTempo: 110 },
    { id: 122, name: "Chutichuh Grid", category: ["flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1501b6496de6d3592e1.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9789dd6417c6208c5a4.png", originalTempo: 100 },
    { id: 22, name: "Colt Forty Five", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669c9be954921d84f6e7337e.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669ca4895f2569c9c82eba14.png", originalTempo: 100 },
    { id: 130, name: "Crazy 3's", category: ["accent-tap", "timing", "natural-decays"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150c34bae98132c76b8.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978f70e31fc1ac6df57.png", originalTempo: 110 },
    { id: 23, name: "Crazy 5's", category: ["rolls", "exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/674ffbac251b39214bf08692.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66b1977c3129355e2473e833.png", originalTempo: 80 },
    { "id": 63, "name": "Diddle Diddle Five Nine", "category": ["rolls", "exercises"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89e0c6a839f6d950a5d9.mpeg", "sheetMusicSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89ec7172d76f6173b993.png", "originalTempo": 90 },    
    { id: 184, name: "Diddle Primer", category: ["rolls", "natural-decays"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675f4ed6109525645f5f33a2.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675f4db8db46566471fabef1.png", originalTempo: 120},
    { id: 172, name: "Diddles - Singles", category: ["rolls", "singles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6759773153bb95196ead8ec7.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6759773653bb95464dad8ec9.png", originalTempo: 70},
    { id: 137, name: "Dotted 8th - Quarter Triplet Interp Grid", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd15048c0c3c6100c0a90.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978c34bae74cc2c72a3.png", originalTempo: 110 },           
    { id: 288, name: "Dotted 8ths", category: ["rhythms"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67788b79c290c65856bff9fe.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67788b867e4aa65138b96a4e.png", originalTempo: 120},
        { id: 322, name: "Dotted Rhythms Builder #1", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b081255b10210a822b.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a1be84ab19e1c5abc9.png", originalTempo: 180 },
        { id: 323, name: "Dotted Rhythms Builder #2", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b08238248367dbeb36.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a13cda55298a41da71.png", originalTempo: 90 },
    
    { id: 276, name: "Dotted Rhythms Etude #1", category: ["etudes"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67788b7910dd0d4894904b90.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6773e1019be26b8c6a4bd1aa.png", originalTempo: 100 },
    { id: 277, name: "Dotted Rhythms Etude #2", category: ["etudes"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67788b79b0a11f078fc11292.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6773e1014aceabed6e44413f.png", originalTempo: 100 },
    { id: 24, name: "Double Beat", category: ["one-handers"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/662d5a89bd3e5bdc6846a019.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/660de00e25bbbbc0294d2d64.png", originalTempo: 110 },
    { id: 266, name: "Double Paradiddle Builder", category: ["paradiddles", "accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676d141ba28a50fa37d59644.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676d14167a5c4c2f82697b12.png", originalTempo: 100 },
    { id: 143, name: "Double Paradiddle Grid", category: ["paradiddles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150c34bae9f792c76b2.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9789dd6416f3b08c59a.png", originalTempo: 70 },
    { id: 144, name: "Double Paradiddle Grid Backwards", category: ["paradiddles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150c34baeaf262c76b5.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978c34bae13112c7299.png", originalTempo: 70 },
    { id: 25, name: "Down Up", category: ["one-handers"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/662d5a892d01fa46e4a7bf98.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673d4c6ca4764d32a9215e9c.png", originalTempo: 120 },
        { id: 324, name: "Duple Roll - 8th 5let Roll", category: ["timing", "rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b0be84ab4c68c5abe5.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a1f9e1e1b864191fbd.png", originalTempo: 120 },
        { id: 325, name: "Duple Roll - 16th Roll", category: ["timing", "rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b0be84ab4f0ac5abe8.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a181255b38940a8216.png", originalTempo: 80 },
        { id: 326, name: "Duple Roll - Triplet Roll", category: ["timing", "rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b03cda5549c241da89.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a1be84ab6442c5abca.png", originalTempo: 110 },
    
    { id: 145, name: "Egg Beater Mission", category: ["flams", "natural-decays"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1509dd6416b8508caa3.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9789dd641642408c59f.png", originalTempo: 100 },
    { id: 26, name: "Eights", category: ["one-handers"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/662d5a892d01fa98a8a7bf99.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/662d5a89277a38d7607db7f8.png", originalTempo: 160 },
    { id: 27, name: "Fat Rabbit", category: ["one-handers", "timing", "exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669c9be92477ef8b710e6d29.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669ca48953a603b85bf03571.png", originalTempo: 100 },
    { id: 28, name: "Flam Accent Builder", category: ["flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/668a21bd4a18764bf11d4d74.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/668a21c7e38553c60777aeb4.png", originalTempo: 110 },
    { id: 29, name: "Flam Accent Grid", category: ["flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/668a21bd8f5b12632a00387d.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/668a21c7e3855326d277aeb3.png", originalTempo: 100 },
    { id: 30, name: "Flam Accent Grid Backwards", category: ["flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/669c62985f2569c32e2d754f.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/668a21c74a1876e7461d4d77.png", originalTempo: 100 },
    { id: 133, name: "Flam Accent Timing Gauntlet", category: ["flams", "timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150f9358b424d1d1da8.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9781b6496dcd4358ea7.png", originalTempo: 90 },
    { id: 119, name: "Flam Drag Grid", category: ["flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd15046a7b5ebd65c27e4.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978c34baeef7a2c729f.png", originalTempo: 100 },
    { id: 121, name: "Flam Five Grid", category: ["flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1501b649640843592e2.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9789dd641dfc808c599.png", originalTempo: 100 },
    { id: 31, name: "Flam Tap Builder", category: ["flams", "natural-decays"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/668a21bd8f5b12322a00387e.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/668a21c78f5b1226ed00387f.png", originalTempo: 90 },
    { id: 32, name: "Flams - Flam Taps", category: ["flams", "natural-decays"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673f2efafbba5775cb55a93c.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/668a21c7e385535a4977aeb2.png", originalTempo: 110 },
    { id: 33, name: "Flams - Swisses", category: ["flams", "natural-decays"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673f2efa387fff5bbd3e5eee.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/668a21c78f5b126785003880.png", originalTempo: 110 },
    { id: 74, name: "Flammus", category: ["flams", "exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66f8e76896de2f8b4184cb3d.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66f8e6ecf4440d18e774600e.png", originalTempo: 70 }, 
    { id: 158, name: "Forte Piano Exercise", category: ["accent-tap", "timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832cf53bb956cfbaba9e0.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832c0070071ee21f456fa.png", originalTempo: 110},
    { id: 83, name: "Fulcrum Freddie", category: ["exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e546f8cbbd5d3b01368.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e3ee92102b6053d18d9.png", originalTempo: 70 },
    { id: 34, name: "Gallop", category: ["rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/662d5a898f22b9707e3319f0.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/662d5a89ab191d7ccfd398fb.png", originalTempo: 180 },
    { id: 159, name: "Grandma Interp Grid", category: ["timing", "paradiddles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832cfa7758c2972370f36.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832c0b965320e2a18d8b3.png", originalTempo: 70},
    { id: 160, name: "Grandpa Interp Grid", category: ["timing", "paradiddles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832cfb5c0944e565152bc.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832c0b9653200a718d8b4.png", originalTempo: 70},
    { id: 186, name: "Herta Diddles Slurred", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6769f8e37e6211a987b7a460.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6769f8ddf8795680d75f9507.png", originalTempo: 120 },
    { id: 187, name: "Herta Diddles Straight", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6769f8e30bcca00747854aaa.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6775b2a7d24a8c565ca6f497.png", originalTempo: 90 },
    { id: 278, name: "Herta Builder", category: ["singles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6773e0f3764e267d90481a26.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6773e101764e26740d481a2b.png", originalTempo: 110 },
    { id: 136, name: "Herta Builder Grid", category: ["singles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd15046a7b580125c27e3.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978f70e319560c6df5d.png", originalTempo: 110 },
    { id: 141, name: "Herta 1 Accent Grid", category: ["singles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150c34bae07eb2c76b1.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9781b64967cb8358ea9.png", originalTempo: 90 },
    { id: 142, name: "Herta 2 Accent Grid", category: ["singles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150f70e312e11c6e397.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9789dd6417fb408c5a3.png", originalTempo: 90 },
    { id: 35, name: "Huckdigadics", category: ["one-handers", "accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639dc4a7bf7935d08bfa8fa.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db2cb47850fc232acdeb.png", originalTempo: 80 },
    { id: 36, name: "Huckgadics", category: ["one-handers", "accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/662d5a89ab191d3398d398fa.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639214eb47850cada29901e.png", originalTempo: 100 },
        { id: 327, name: "Huckgadics Roll", category: ["timing", "rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b081255b50a60a822d.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a181255b5ad00a8218.png", originalTempo: 80 },
    
    { id: 37, name: "Huggadics", category: ["one-handers", "accent-tap", "natural-decays"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/662d5a898f22b9012e3319f1.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639214e790230c0fc5ecd9d.png", originalTempo: 120 },
        { id: 328, name: "Huggadiddles", category: ["one-handers", "hybrids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b081255b2a750a8227.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a1be84ab7fe5c5abcc.png", originalTempo: 80 },
    
    { id: 135, name: "Inside Diddle Interp Gauntlet", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1508860411959180950.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9789dd641e4f908c59c.png", originalTempo: 90 },
    { id: 84, name: "Inside Paradiddle Filler", category: ["paradiddles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832cf07007157e4f4571b.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832c03c5cd5b169b0021a.png", originalTempo: 130 },
    { id: 149, name: "Inverted Flam Taps & Cheeses", category: ["flams", "hybrids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd15088604140ca18094f.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978c34bae1bdb2c72a1.png", originalTempo: 60 },
    { id: 38, name: "Inverted Huggadics", category: ["one-handers", "accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db227bf7936349bfa863.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db2c575d6773a56dc91d.png", originalTempo: 80 },
        { id: 329, name: "Inverted Huggadiddles", category: ["one-handers", "hybrids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b081255b54920a822a.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a18238242935dbeb2c.png", originalTempo: 70 },
    
    { id: 182, name: "Inverted Roll Gauntlet", category: ["rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675aab43da8c3968fb41cbf8.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675aab3b3772bd98de838ae3.png", originalTempo: 100},
    { id: 39, name: "Irish Spring", category: ["one-handers"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db2214262955ef62a10b.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db2c575d673ce96dc91c.png", originalTempo: 140 },
    { id: 40, name: "Jedi 8's", category: ["one-handers", "timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db22142629978762a10d.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db2c575d670f776dc91a.png", originalTempo: 140 },
    { id: 41, name: "Jeepers Creepers", category: ["rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675977315f5b95bde1ef6a1c.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67597736da8c39175140a089.png", originalTempo: 110 },
    { id: 271, name: "Legato Pyramid", category: ["natural-decays"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676d141b7a5c4ca669697b14.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676d1416cd5e7254c0c90c33.png", originalTempo: 150 },
    { id: 93, name: "Moeller Modulations", category: ["exercises", "natural-decays"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1501b64966c553592e3.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978c34bae79ea2c729d.png", originalTempo: 110 },
    { id: 267, name: "Neo Metric", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/678104713cda550727421beb.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676d1416cd5e72b340c90c34.png", originalTempo: 100 },
    { id: 72, name: "Nested 5let & 7let Builder", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb9dfde3ca52f3ca61d0cd.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb9dec7172d7031d73d86b.png", originalTempo: 120 },
    { "id": 69, "name": "Nested Triplet & 5let Builder", "category": ["timing"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89e048bae4fa5999a9cb.mpeg", "sheetMusicSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89ec0fbb91057e3bcd93.png", "originalTempo": 100 }, 
    { "id": 70, "name": "Nested Triplet Builder", "category": ["timing"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89e065c670298648efed.mpeg", "sheetMusicSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb998865c67036074906a0.png", "originalTempo": 130 }, 
    { id: 173, name: "Old School Pudadas", category: ["accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675977313c5cd5f779b1b3fc.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67597736da8c3997ca40a08a.png", originalTempo: 150},
    { id: 148, name: "Pantera", category: ["singles", "exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150c34bae8cdc2c76b6.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978c34baecf892c729b.png", originalTempo: 70 },
    { id: 174, name: "Para Pyramid", category: ["paradiddles", "hybrids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675977313c5cd54bd3b1b3fb.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675977365f5b958358ef6a22.png", originalTempo: 130},
    { "id": 185, "name": "Paradiddle Builder", "category": ["paradiddles"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676788e3e3599e298ab64fa6.mpeg", "sheetMusicSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67678a00fb63bccbfc6b5eee.png", "originalTempo": 130 },
    { "id": 73, "name": "Paradiddle Diddle Builder", "category": ["paradiddles"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66f64c18c293c457713f7774.mpeg", "sheetMusicSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66f64c1dc293c4b8823f7775.png", "originalTempo": 100 },
    { id: 175, name: "Paradiddle Diddle Pyramid", category: ["paradiddles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67597731b5c09474f55320ef.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67597736b5c09456a35320f2.png", originalTempo: 130},
    { id: 85, name: "Paradiddle Filler", category: ["paradiddles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e54237fe460ba9a961e.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e3e6f8cbb22e5b0135f.png", originalTempo: 130 },
    { id: 127, name: "Paradiddle Interp Gauntlet", category: ["paradiddles", "timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1501b6496f0453592e4.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9781b6496a9f5358eaa.png", originalTempo: 100 },
    { id: 176, name: "Paradiddle Pudada Filler", category: ["paradiddles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6759773153bb959bf0ad8ec8.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67597736da8c39615240a08e.png", originalTempo: 120},
    { id: 86, name: "Paradiddle Pyramid", category: ["paradiddles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e54353d384c0daa2b2e.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e3ee9210228ea3d18da.png", originalTempo: 120 },
    { id: 285, name: "Paradiddles", category: ["paradiddles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67788b79c290c6a1d6bff9fd.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67788b867e4aa6e188b96a50.png", originalTempo: 140},
    { id: 161, name: "Pats", category: ["rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832cf53bb95dff0aba9e2.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832c0b5c09442cd5152ac.png", originalTempo: 110},
    { "id": 79, "name": "PDD + PD", "category": ["paradiddles"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67282fc21e961ec8775c31dd.mpeg", "sheetMusicSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67282fcb1e961e57fd5c31df.png", "originalTempo": 70 },      
    { "id": 71, "name": "Polyrhythm Breakdown", "category": ["timing"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89e07172d7af0273b98b.mpeg", "sheetMusicSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89ec48bae42de899a9d9.png", "originalTempo": 100 },             
        { id: 330, name: "Polyrhythm Builder #1", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b0be84ab307bc5abe9.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a1f9e1e117a4191fbb.png", originalTempo: 100 },
        { id: 331, name: "Polyrhythm Builder #2", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b081255bc41d0a8229.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a1be84ab8131c5abc8.png", originalTempo: 90 },
    
    { id: 162, name: "Pudada Filler", category: ["accent-tap", "paradiddles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832cf0700712011f4571a.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832c053bb9522a6aba9d5.png", originalTempo: 120},
    { id: 294, name: "Quarter Triplets", category: ["rhythms"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67788b7951e748503366b882.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67788b8651e7485d1c66b885.png", originalTempo: 180},
    { id: 293, name: "Quarters", category: ["rhythms"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67788b79584f3a0ca3a3930b.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67788b86d4ebc4c510c78768.png", originalTempo: 200},
    { id: 163, name: "Racketeer Interp Grid", category: ["accent-tap", "paradiddles", "hybrids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832cfb9653292d218d9d4.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832c0a7758c8eea370f31.png", originalTempo: 90},
        { id: 332, name: "Ratio Rhythms Builder #1", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b0f9e1e13c22191fd6.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a181255b51c00a821b.png", originalTempo: 180 },
        { id: 333, name: "Ratio Rhythms Builder #2", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b081255bae870a8228.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a1be84ab72edc5abcb.png", originalTempo: 110 },
        { id: 334, name: "Ratio Rhythms Builder #3", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b08238242459dbeb3a.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a181255b16eb0a821c.png", originalTempo: 60 },
    
    { id: 283, name: "Ratio Rhythms Etude #1", category: ["etudes"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67788b79d4ebc4f48ec78754.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6775b30f6f724e3b55f61a55.png", originalTempo: 60},
    { id: 284, name: "Ratio Rhythms Etude #2", category: ["etudes"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67788b797e4aa618fdb96a48.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6775b939b0a11f1f55bc438d.png", originalTempo: 80},
    { id: 152, name: "Robinson's", category: ["exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6757419b046d51269c223b2e.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67574101da8c3906a93d27cf.png", originalTempo: 80 },
    { id: 91, name: "Satellite", category: ["exercises", "flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd15046a7b51e035c27e2.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978c34bae52f02c72a0.png", originalTempo: 150 },
    { id: 42, name: "SCV Rolls", category: ["rolls", "exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66b19772216f9fc102cb076c.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66b1977c3129351be873e832.png", originalTempo: 110 },
    { id: 43, name: "SCV Timing", category: ["timing", "exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66b19771216f9fcd47cb076b.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66b1977cdd126b2cc6e282ea.png", originalTempo: 110 },
    { id: 268, name: "Shirley Murphy Builder", category: ["natural-decays", "hybrids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676d141b2ec4ebe2024d18a2.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676d1416cd5e724357c90c35.png", originalTempo: 100 },
    { id: 270, name: "Shups", category: ["one-handers"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676d141b2ec4eb80b74d18a3.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/676d1416cd5e72ad71c90c32.png", originalTempo: 110 },
    { id: 95, name: "Singles Builder", category: ["singles"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd15088604199c3180953.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978c34bae63e82c729a.png", originalTempo: 60 },  
    { id: 177, name: "Slurred Diddles", category: ["rolls", "timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67597731da8c396a9a40a087.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67597736da8c39c92740a08b.png", originalTempo: 100},
    { id: 132, name: "Slurred Tap 5's & 9's", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150689e40ffa3ef7202.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978f70e31bf81c6df5c.png", originalTempo: 110 },   
    { id: 131, name: "Slurred Tap 9's", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150689e405071ef7204.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9781b64963cc4358ea3.png", originalTempo: 110 },    
    { id: 44, name: "Spanks", category: ["exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66b19771dc484cc1fd32ff0c.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66b1977c216f9f53f5cb17d0.png", originalTempo: 80 },
    { id: 45, name: "Sterling", category: ["exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66b19772dc484c162032ff0d.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66b1977c0be03f08f01d3044.png", originalTempo: 90 },
    { id: 87, name: "Stick Control", category: ["exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e54e3d971176d580f36.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67355e2de3d971b584581c2b.png", originalTempo: 80 },
    { id: 279, name: "Straight Rhythms Etude #1", category: ["etudes"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67788b79584f3aa6f0a3930a.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6773e1019be26b848c4bd1ab.png", originalTempo: 80 },
    { id: 280, name: "Straight Rhythms Etude #2", category: ["etudes"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67788b7951e7489f5266b883.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6773e10191c399e2dde07a36.png", originalTempo: 80 },
    { id: 150, name: "Swiss Hitter", category: ["flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150c34bae34212c76b7.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978689e400749ef6e79.png", originalTempo: 70 },
    { id: 164, name: "Swiss Huggadics", category: ["accent-tap", "natural-decays"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832cf3c5cd56427b0021e.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832c053bb95709eaba9d4.png", originalTempo: 90},
    { id: 183, name: "Swiss Mover", category: ["flams", "natural-decays"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675aab43da8c39aab841cbf9.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675aab3b3772bd4375838ae5.png", originalTempo: 110},
    { id: 78, name: "Swiss Taps", category: ["flams", "exercises", "natural-decays"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/671ec9ddb62b363944d58a11.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/671ec9bbb62b36a9b7d58a04.png", originalTempo: 90 },      
    { id: 165, name: "Swiss Triplet Grid", category: ["flams", "natural-decays"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832cf3c18ec984e0285c5.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832c0988a5f02e0a39a6b.png", originalTempo: 110},
    { id: 46, name: "Swung Bucks", category: ["one-handers", "accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db2214262980e562a10e.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db2c1426295a2e62a115.png", originalTempo: 110 },
    { id: 47, name: "Syncopated Huggadics", category: ["one-handers", "accent-tap", "natural-decays"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/662d5a892d01fa9177a7bf97.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639214ef59f86e27b072574.png", originalTempo: 100 },
         { id: 335, name: "Syncopated Rhythms Builder #1", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b0be84ab7505c5abea.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a1f9e1e1311c191fbe.png", originalTempo: 110 },
         { id: 336, name: "Syncopated Rhythms Builder #2", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b081255b6f8c0a822f.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a1f9e1e1a684191fbf.png", originalTempo: 160 },
         { id: 337, name: "Syncopated Rhythms Builder #3", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/678170efcac71d065c5f395e.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/678170f81239eec487b06bb9.png", originalTempo: 80 },
   
    { id: 166, name: "Tap Buzzes & Drags", category: ["accent-tap", "hybrids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832cf3c18eca3a10285c4.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832c0a7758c5d50370f30.png", originalTempo: 120},
    { id: 129, name: "Tap Diddle Interp Grid", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1508860417a15180955.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9781b649647f8358ea8.png", originalTempo: 110 },
    { id: 88, name: "Tap Pyramid", category: ["exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e543a8d118cd85fb78b.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e3e6f8cbbfc07b01360.png", originalTempo: 70 },
    { id: 107, name: "The Big Ten", category: ["flams", "hybrids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673f2efaa1e7fb69e1c16787.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978689e406e7aef6e78.png", originalTempo: 90 },
    { id: 48, name: "The Big Three", category: ["flams", "hybrids"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673f2efa7fc15f78231c7010.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/668a21c78f5b12b4d9003881.png", originalTempo: 90 },
    { id: 75, name: "Thirteen", category: ["accent-tap", "one-handers", "exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66f8e768f4440d06e074601b.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66f8e6734c8d5ff0156ea1a5.png", originalTempo: 60 },      
    { id: 167, name: "Triplet - 5let", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832cfb1300c134b5ed3fb.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832c0988a5f05dba39a6c.png", originalTempo: 100},
    { "id": 62, "name": "Triplet - 8th 5let Roll", "category": ["timing", "rolls"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89e065c670b0fb48efea.mpeg", "sheetMusicSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89ecc6a839421950a5df.png", "originalTempo": 120 },       
    { "id": 59, "name": "Triplet - 16th", "category": ["timing"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89e065c6703f5148efeb.mpeg", "sheetMusicSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89ec7172d7c61b73b992.png", "originalTempo": 120 },
    { id: 134, name: "Triplet - 16th 2 Note Timing Gauntlet", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1508860417b9a180952.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9781b64963a4b358ea6.png", originalTempo: 110 }, 
    { id: 168, name: "Triplet - 16th Roll", category: ["timing", "rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832cfb1300c4d795ed3fc.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832c0b5c0945a215152ad.png", originalTempo: 100},
    { "id": 60, "name": "Triplet - Duple Roll", "category": ["timing", "rolls"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89e048bae4027399a9cd.mpeg", "sheetMusicSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89ec48bae4644399a9d8.png", "originalTempo": 120 },
    { id: 178, name: "Triplet - Duple Roll - Triplet Roll", category: ["rolls", "timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675977315f5b95d906ef6a1d.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67597736da8c3910b240a08c.png", originalTempo: 110},
         { id: 338, name: "Triplet - Triplet Roll", category: ["rolls", "timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b0f9e1e195ae191fd5.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a181255be6700a821a.png", originalTempo: 110 },
         { id: 339, name: "Triplet Roll - 8th 5let Roll", category: ["rolls", "timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b0f9e1e19704191fd7.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a13cda55499c41da74.png", originalTempo: 110 },
         { id: 340, name: "Triplet Roll - 16th Roll", category: ["rolls", "timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5b08238248121dbeb38.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6780c5a181255b02d30a8217.png", originalTempo: 80 },
    
    { id: 50, name: "Triplet 1 Accent Grid", category: ["accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/662d5a89277a38a7437db7fc.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/662d5a892d01fa25a8a7bf9d.png", originalTempo: 150 },
    { id: 111, name: "Triplet 1 Accent Grid Backwards", category: ["accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1509dd641965208caa4.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9781b6496d38b358ea2.png", originalTempo: 150 },
    { id: 51, name: "Triplet 1 Note", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db227bf793a26fbfa865.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db2c14262953d962a114.png", originalTempo: 150 },
    { "id": 64, "name": "Triplet 2 Accent Grid", "category": ["accent-tap"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89e07172d79d5c73b98c.mpeg", "sheetMusicSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66eb89ec48bae48bbe99a9d7.png", "originalTempo": 110 },   
    { id: 112, name: "Triplet 2 Accent Grid Backwards", category: ["accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1509dd641704908caa6.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9789dd6412cf508c59d.png", originalTempo: 110 },
    { id: 52, name: "Triplet 2 Note", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db22575d6783436dc918.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db2c14262924b962a112.png", originalTempo: 150 },
    { id: 106, name: "Triplet 3 Accent Grid", category: ["accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1508860416fc7180954.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978f70e310976c6df54.png", originalTempo: 120 },
    { id: 113, name: "Triplet 3 Accent Grid Backwards", category: ["accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150c34bae7b532c76b4.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9789dd641656a08c5a2.png", originalTempo: 120 },
    { id: 53, name: "Triplet 3 Note", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db22660aba5ce884bfd0.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6639db2c575d67b6676dc91b.png", originalTempo: 150 },
    { id: 179, name: "Triplet 5's", category: ["rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675977315f5b95430def6a1b.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67597736da8c390cd540a08d.png", originalTempo: 120},
    { id: 54, name: "Triplet 7's", category: ["rolls", "exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/660de00d4c0c5a5dee77fb90.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/662d5a89277a3851927db7ff.png", originalTempo: 120 },
    { id: 89, name: "Triplet 7's Builder", category: ["rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67355802353d3836b4aa30c0.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675d169afb63bc42225ce34e.png", originalTempo: 110 },
    { id: 138, name: "Triplet Accent Interp", category: ["timing", "accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150689e40519def7203.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9781b6496670c358ea5.png", originalTempo: 120 },
    { id: 90, name: "Triplet Chicken & A Roll", category: ["rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e5415ef95543c815612.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e3e237fe4fd199a961b.png", originalTempo: 110 },
    { id: 55, name: "Triplet Diddle", category: ["rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67354e546f8cbb4598b01367.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/662d5a89277a3800407db7fe.png", originalTempo: 120 },
    { id: 126, name: "Triplet Diddle Interp Gauntlet", category: ["timing", "rolls"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd1508860412b4e180956.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc9789dd641ea9e08c59b.png", originalTempo: 110 },
    { id: 281, name: "Triplet Rhythms Etude #1", category: ["etudes"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67788b79d4ebc40fa7c78755.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6773e101985cef0de8091919.png", originalTempo: 90 },
    { id: 282, name: "Triplet Rhythms Etude #2", category: ["etudes"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67788b79b0a11f4cdfc11294.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/6773e1012ec4eb6bd25f0434.png", originalTempo: 90 },
    { id: 169, name: "Triplet Taps Gauntlet", category: ["accent-tap"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832cf3c5cd5b36eb0021f.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832c0988a5f540fa39a69.png", originalTempo: 100},
    { id: 287, name: "Triplets", category: ["rhythms"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67788b79584f3add90a39309.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/67788b8651e7482b3c66b886.png", originalTempo: 150},
    { id: 124, name: "Tuchada Grid", category: ["flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150f70e31fcdcc6e39d.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978f70e314cd0c6df58.png", originalTempo: 100 },
    { id: 125, name: "Tudacha Grid", category: ["flams"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd15046a7b5684e5c27e5.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978f70e3100f1c6df56.png", originalTempo: 100 },
    { "id": 77, "name": "Universal Grip", "category": ["timing", "one-handers", "accent-tap", "natural-decays", "hybrids"], "audioSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/670c1437614019f7c7dfdd61.mpeg", "sheetMusicSrc": "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/670c143c8a1004707a933477.png", "originalTempo": 90 },    
    { id: 139, name: "Upbeat Triplet Builder", category: ["timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150d8e95dad753af996.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/674578f1615077e478ffd0fe.png", originalTempo: 120 },
    { id: 140, name: "Upbeat Triplet Roll Builder", category: ["rolls", "timing"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dd150f70e31eb4ec6e39c.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/673dc978689e407010ef6e76.png", originalTempo: 100 },  
    { id: 170, name: "Wiggaduhs Grid", category: ["accent-tap", "natural-decays"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832cf988a5fef59a39a78.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/675832c0070071baf0f456fb.png", originalTempo: 70},
    { id: 56, name: "WD-40", category: ["rolls", "exercises"], audioSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66b1b60cdc484c56da34976d.mpeg", sheetMusicSrc: "https://storage.googleapis.com/msgsndr/pFMv0RyoaIz90Z0Nbyos/media/66b1b605dd126b40c1e42a42.png", originalTempo: 110 },
        ];

    // Playlists Data Structure
    const playlists = [
    // Basic Timing Warm Up Easy
    {
        name: 'Basic Timing Warm Up Easy',
        items: [
            // 16th 1 note (Exercise ID: 13)
            { exerciseId: 13, tempos: [90, 110, 130], repetitionsPerTempo: 3 },
            // 16th 2 note (Exercise ID: 14)
            { exerciseId: 14, tempos: [90, 110, 130], repetitionsPerTempo: 3 },
            // 16th 3 note (Exercise ID: 15)
            { exerciseId: 15, tempos: [90, 110, 130], repetitionsPerTempo: 3 },
            // Triplet 1 note (Exercise ID: 51)
            { exerciseId: 51, tempos: [110, 125, 140], repetitionsPerTempo: 3 },
            // Triplet 2 note (Exercise ID: 52)
            { exerciseId: 52, tempos: [110, 125, 140], repetitionsPerTempo: 3 },
            // Triplet 3 note (Exercise ID: 53)
            { exerciseId: 53, tempos: [110, 125, 140], repetitionsPerTempo: 3 },
            // 8th - Triplet (Exercise ID: 11)
            { exerciseId: 11, tempos: [120, 140], repetitionsPerTempo: 3 },
            { exerciseId: 11, tempos: [160], repetitionsPerTempo: 2 },
            // Triplet - 8th (Exercise ID: 49)
            { exerciseId: 49, tempos: [120, 140], repetitionsPerTempo: 3 },
            { exerciseId: 49, tempos: [160], repetitionsPerTempo: 2 },
            // 16th - Triplet (Exercise ID: 58)
            { exerciseId: 58, tempos: [100, 120], repetitionsPerTempo: 3 },
            { exerciseId: 58, tempos: [140], repetitionsPerTempo: 2 },
            // Triplet - 16th (Exercise ID: 59)
            { exerciseId: 59, tempos: [100, 120], repetitionsPerTempo: 3 },
            { exerciseId: 59, tempos: [140], repetitionsPerTempo: 2 }
        ]
    },

    // Basic Timing Warm Up Hard
    {
        name: 'Basic Timing Warm Up Hard',
        items: [
            // 16th 1 note (Exercise ID: 13)
            { exerciseId: 13, tempos: [120, 145, 170], repetitionsPerTempo: 3 },
            // 16th 2 note (Exercise ID: 14)
            { exerciseId: 14, tempos: [120, 145, 170], repetitionsPerTempo: 3 },
            // 16th 3 note (Exercise ID: 15)
            { exerciseId: 15, tempos: [120, 145, 170], repetitionsPerTempo: 3 },
            // Triplet 1 note (Exercise ID: 51)
            { exerciseId: 51, tempos: [150, 170, 190], repetitionsPerTempo: 3 },
            // Triplet 2 note (Exercise ID: 52)
            { exerciseId: 52, tempos: [150, 170, 190], repetitionsPerTempo: 3 },
            // Triplet 3 note (Exercise ID: 53)
            { exerciseId: 53, tempos: [150, 170, 190], repetitionsPerTempo: 3 },
            // 8th - Triplet (Exercise ID: 11)
            { exerciseId: 11, tempos: [150, 170, 190], repetitionsPerTempo: 3 },
            // Triplet - 8th (Exercise ID: 49)
            { exerciseId: 49, tempos: [150, 170, 190], repetitionsPerTempo: 3 },
            // 16th - Triplet (Exercise ID: 58)
            { exerciseId: 58, tempos: [130, 145, 160], repetitionsPerTempo: 3 },
            // Triplet - 16th (Exercise ID: 59)
            { exerciseId: 59, tempos: [130, 145, 160], repetitionsPerTempo: 3 }
        ]
    },

    // Paradiddle Warm Up Easy
    {
        name: 'Paradiddle Warm Up Easy',
        items: [
            // Huckgadics (Exercise ID: 36)
            { exerciseId: 36, tempos: [70, 85, 100, 120], repetitionsPerTempo: 4 },
            // Paradiddle Diddle Builder (Exercise ID: 73)
            { exerciseId: 73, tempos: [80, 95], repetitionsPerTempo: 3 },
            { exerciseId: 73, tempos: [110, 130], repetitionsPerTempo: 2 },
            // PDD + PD (Exercise ID: 79)
            { exerciseId: 79, tempos: [50, 65, 80, 90], repetitionsPerTempo: 2 }
        ]
    },

    // Paradiddle Warm Up Hard
    {
        name: 'Paradiddle Warm Up Hard',
        items: [
            // Huckgadics (Exercise ID: 36)
            { exerciseId: 36, tempos: [90, 110, 130, 150], repetitionsPerTempo: 4 },
            // Paradiddle Diddle Builder (Exercise ID: 73)
            { exerciseId: 73, tempos: [100, 120], repetitionsPerTempo: 3 },
            { exerciseId: 73, tempos: [140, 150], repetitionsPerTempo: 2 },
            // PDD + PD (Exercise ID: 79)
            { exerciseId: 79, tempos: [70, 85, 100, 110], repetitionsPerTempo: 2 }
        ]
    },

    // Rolls Warm Up Easy
    {
        name: 'Rolls Warm Up Easy',
        items: [
            // Double Beat (Exercise ID: 24)
            { exerciseId: 24, tempos: [90, 100, 110], repetitionsPerTempo: 4 },
            { exerciseId: 24, tempos: [120, 130], repetitionsPerTempo: 3 },
            // Irish Spring (Exercise ID: 39)
            { exerciseId: 39, tempos: [130, 140, 150, 160], repetitionsPerTempo: 3 },
            // Gallop (Exercise ID: 34)
            { exerciseId: 34, tempos: [120, 130, 140], repetitionsPerTempo: 4 },
            { exerciseId: 34, tempos: [150, 160], repetitionsPerTempo: 3 },
            // Triplet 7's (Exercise ID: 54)
            { exerciseId: 54, tempos: [100, 115, 130], repetitionsPerTempo: 4 },
            { exerciseId: 54, tempos: [145, 160], repetitionsPerTempo: 3 },
            // Diddle Diddle 5 9 (Exercise ID: 63)
            { exerciseId: 63, tempos: [90, 100, 110, 120], repetitionsPerTempo: 4 },
            // Triplet Diddle (Exercise ID: 55)
            { exerciseId: 55, tempos: [90, 105, 120], repetitionsPerTempo: 4 },
            { exerciseId: 55, tempos: [135, 150], repetitionsPerTempo: 3 }
        ]
    },

    // Rolls Warm Up Hard
    {
        name: 'Rolls Warm Up Hard',
        items: [
            // Double Beat (Exercise ID: 24)
            { exerciseId: 24, tempos: [120, 130, 140], repetitionsPerTempo: 4 },
            { exerciseId: 24, tempos: [150, 160], repetitionsPerTempo: 3 },
            // Irish Spring (Exercise ID: 39)
            { exerciseId: 39, tempos: [140, 155, 170, 180], repetitionsPerTempo: 3 },
            // Gallop (Exercise ID: 34)
            { exerciseId: 34, tempos: [160, 175, 190, 200], repetitionsPerTempo: 4 },
            { exerciseId: 34, tempos: [215], repetitionsPerTempo: 3 },
            // Triplet 7's (Exercise ID: 54)
            { exerciseId: 54, tempos: [140, 155, 170], repetitionsPerTempo: 4 },
            { exerciseId: 54, tempos: [185, 200], repetitionsPerTempo: 3 },
            // Diddle Diddle 5 9 (Exercise ID: 63)
            { exerciseId: 63, tempos: [100, 120, 135, 150], repetitionsPerTempo: 4 },
            // Triplet Diddle (Exercise ID: 55)
            { exerciseId: 55, tempos: [110, 125, 140], repetitionsPerTempo: 4 },
            { exerciseId: 55, tempos: [155, 170], repetitionsPerTempo: 3 }
        ]
    },

    // Flam Warm Up Easy
    {
        name: 'Flam Warm Up Easy',
        items: [
            // Flams - Flam Taps (Exercise ID: 32)
            { exerciseId: 32, tempos: [110, 120, 130], repetitionsPerTempo: 4 },
            { exerciseId: 32, tempos: [140, 150], repetitionsPerTempo: 3 },
            // Flams - Swisses (Exercise ID: 33)
            { exerciseId: 33, tempos: [110, 120, 130], repetitionsPerTempo: 4 },
            { exerciseId: 33, tempos: [140, 150], repetitionsPerTempo: 3 },
            // Flam Accent Builder (Exercise ID: 28)
            { exerciseId: 28, tempos: [105, 120], repetitionsPerTempo: 3 },
            { exerciseId: 28, tempos: [135, 150], repetitionsPerTempo: 2 },
            // Add A Flam (Exercise ID: 17)
            { exerciseId: 17, tempos: [70, 80, 90], repetitionsPerTempo: 3 },
            { exerciseId: 17, tempos: [100, 110], repetitionsPerTempo: 2 },
            // Flam Tap Builder (Exercise ID: 31)
            { exerciseId: 31, tempos: [80, 90, 100], repetitionsPerTempo: 3 },
            { exerciseId: 31, tempos: [110], repetitionsPerTempo: 2 },
            // Swiss Taps (Exercise ID: 78)
            { exerciseId: 78, tempos: [80, 90, 100, 110], repetitionsPerTempo: 3 },
            // Flam Accent Grid (Exercise ID: 29)
            { exerciseId: 29, tempos: [80, 90, 100], repetitionsPerTempo: 4 },
            { exerciseId: 29, tempos: [110, 120], repetitionsPerTempo: 3 },
            // Flam Accent Grid Backwards (Exercise ID: 30)
            { exerciseId: 30, tempos: [80, 90, 100], repetitionsPerTempo: 4 },
            { exerciseId: 30, tempos: [110, 120], repetitionsPerTempo: 3 },
            // The Big Three (Exercise ID: 48)
            { exerciseId: 48, tempos: [80, 95, 110], repetitionsPerTempo: 3 },
            { exerciseId: 48, tempos: [125, 140], repetitionsPerTempo: 2 }
        ]
    },

    // Flam Warm Up Hard
    {
        name: 'Flam Warm Up Hard',
        items: [
            // Flams - Flam Taps (Exercise ID: 32)
            { exerciseId: 32, tempos: [130, 145, 160], repetitionsPerTempo: 4 },
            { exerciseId: 32, tempos: [175, 190], repetitionsPerTempo: 3 },
            // Flams - Swisses (Exercise ID: 33)
            { exerciseId: 33, tempos: [130, 145, 160], repetitionsPerTempo: 4 },
            { exerciseId: 33, tempos: [175, 190], repetitionsPerTempo: 3 },
            // Flam Accent Builder (Exercise ID: 28)
            { exerciseId: 28, tempos: [135, 140], repetitionsPerTempo: 3 },
            { exerciseId: 28, tempos: [155, 170], repetitionsPerTempo: 2 },
            // Add A Flam (Exercise ID: 17)
            { exerciseId: 17, tempos: [100, 110, 120], repetitionsPerTempo: 3 },
            { exerciseId: 17, tempos: [130, 140], repetitionsPerTempo: 2 },
            // Flam Tap Builder (Exercise ID: 31)
            { exerciseId: 31, tempos: [100, 110, 120], repetitionsPerTempo: 3 },
            { exerciseId: 31, tempos: [130], repetitionsPerTempo: 2 },
            // Swiss Taps (Exercise ID: 78)
            { exerciseId: 78, tempos: [105, 120, 135, 150], repetitionsPerTempo: 3 },
            // Flam Accent Grid (Exercise ID: 29)
            { exerciseId: 29, tempos: [100, 115, 130], repetitionsPerTempo: 4 },
            { exerciseId: 29, tempos: [145, 160], repetitionsPerTempo: 3 },
            // Flam Accent Grid Backwards (Exercise ID: 30)
            { exerciseId: 30, tempos: [100, 115, 130], repetitionsPerTempo: 4 },
            { exerciseId: 30, tempos: [145, 160], repetitionsPerTempo: 3 },
            // The Big Three (Exercise ID: 48)
            { exerciseId: 48, tempos: [120, 135, 150], repetitionsPerTempo: 3 },
            { exerciseId: 48, tempos: [165, 180], repetitionsPerTempo: 2 }
        ]
    },

    // The 5 Fundamental Exercises Easy
    {
        name: 'The 5 Fundamental Exercises Easy',
        items: [
            // Eights (Exercise ID: 26)
            { exerciseId: 26, tempos: [100, 120, 140, 160, 180, 200], repetitionsPerTempo: 4 },
            // Bucks (Exercise ID: 18)
            { exerciseId: 18, tempos: [100, 110, 120], repetitionsPerTempo: 4 },
            { exerciseId: 18, tempos: [130, 140], repetitionsPerTempo: 3 },
            // Double Beat (Exercise ID: 24)
            { exerciseId: 24, tempos: [90, 100, 110], repetitionsPerTempo: 4 },
            { exerciseId: 24, tempos: [120, 130], repetitionsPerTempo: 3 },
            // Huggadics (Exercise ID: 37)
            { exerciseId: 37, tempos: [80, 90, 100, 110], repetitionsPerTempo: 4 },
            // Huckgadics (Exercise ID: 36)
            { exerciseId: 36, tempos: [70, 85, 100, 120], repetitionsPerTempo: 4 }
        ]
    },

    // The 5 Fundamental Exercises Hard
    {
        name: 'The 5 Fundamental Exercises Hard',
        items: [
            // Eights (Exercise ID: 26)
            { exerciseId: 26, tempos: [150, 170, 190, 210, 230, 250], repetitionsPerTempo: 4 },
            // Bucks (Exercise ID: 18)
            { exerciseId: 18, tempos: [120, 135, 150], repetitionsPerTempo: 4 },
            { exerciseId: 18, tempos: [165, 180], repetitionsPerTempo: 3 },
            // Double Beat (Exercise ID: 24)
            { exerciseId: 24, tempos: [120, 130, 140], repetitionsPerTempo: 4 },
            { exerciseId: 24, tempos: [150, 160], repetitionsPerTempo: 3 },
            // Huggadics (Exercise ID: 37)
            { exerciseId: 37, tempos: [100, 110, 120, 130], repetitionsPerTempo: 4 },
            // Huckgadics (Exercise ID: 36)
            { exerciseId: 36, tempos: [90, 110, 130, 150], repetitionsPerTempo: 4 }
        ]
    }
];

    const audio = document.getElementById('audio');
    const totalTimeDisplay = document.getElementById('totalTime');
    const currentTimeDisplay = document.getElementById('currentTime');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    const volumePercentageDisplay = document.getElementById('volumePercentage');
    const tempoSlider = document.getElementById('tempoSlider');
    const tempoLabel = document.getElementById('tempoLabel');
    const sheetMusicImg = document.querySelector('.sheet-music img');
    const progressContainer = document.querySelector('.progress-bar');
    const progress = document.getElementById('progress');
    const randomExerciseBtn = document.getElementById('randomExerciseBtn');
    const randomTempoBtn = document.getElementById('randomTempoBtn');
    const minTempoInput = document.getElementById('minTempo');
    const maxTempoInput = document.getElementById('maxTempo');
    const stopPlaylistBtn = document.getElementById('stopPlaylistBtn');
    const prevPlaylistItemBtn = document.getElementById('prevPlaylistItemBtn');
    const nextPlaylistItemBtn = document.getElementById('nextPlaylistItemBtn');
    const playlistProgressContainer = document.querySelector('.playlist-progress-container');
    const playlistProgress = document.getElementById('playlistProgress');
    const playlistProgressPercentage = document.getElementById('playlistProgressPercentage');
    const prevExerciseBtn = document.getElementById('prevExerciseBtn');
    const nextExerciseBtn = document.getElementById('nextExerciseBtn');
    const autoRandomizeToggle = document.getElementById('autoRandomizeToggle');
    const repsPerTempoInput = document.getElementById('repsPerTempo');

    const categorySearchInput = document.getElementById('categorySearch');
    const categoryList = document.getElementById('categoryList');
    const exerciseSearchInput = document.getElementById('exerciseSearch');
    const exerciseList = document.getElementById('exerciseList');
    const playlistSearchInput = document.getElementById('playlistSearch');
    const playlistList = document.getElementById('playlistList');
    const playlistQueueSearchInput = document.getElementById('playlistQueueSearch');
    const playlistQueueList = document.getElementById('playlistQueueList');

    let isDragging = false;
    if (playlistQueueSearchInput) playlistQueueSearchInput.disabled = true;
    if (stopPlaylistBtn) stopPlaylistBtn.disabled = true;
    if (prevPlaylistItemBtn) prevPlaylistItemBtn.disabled = true;
    if (nextPlaylistItemBtn) nextPlaylistItemBtn.disabled = true;

    let currentPlaylist = null;
    let currentPlaylistItemIndex = 0;
    let currentTempoIndex = 0;
    let currentRepetition = 0;
    let isPlayingPlaylist = false;
    let playlistQueueMap = [];

    let isRandomizeEnabled = false;
    let repsBeforeChange = 1;
    let currentRepCount = 0;
    let displayedExercises = [];
    let currentExerciseIndex = 0;
    let currentSelectedExercise = null;

    let displayedCategories = ["all", "one-handers", "accent-tap", "rhythms", "timing", "paradiddles", "singles", "rolls", "natural-decays", "flams", "hybrids", "78-grids", "exercises", "etudes"];

    const categoryDisplayMap = {
        "accent-tap": "Accent Tap",
        "rhythms": "Rhythms",
        "one-handers": "One Handers",
        "timing": "Timing",
        "paradiddles": "Paradiddles",
        "singles": "Singles",
        "rolls": "Rolls",
        "natural-decays": "Natural Decays",
        "flams": "Flams",
        "hybrids": "Hybrids",
        "78-grids": "7/8 Grids",
        "exercises": "Exercises",
        "etudes": "Etudes",
        "all": "All Categories"
    };

    let displayedPlaylists = playlists.map((p, i) => ({ index: i, name: p.name }));

    if (audio) audio.loop = false;

    // Initialize
    initializeCategoryList();
    initializePlaylistList();
    populateExerciseList();
    if (exerciseList) exerciseList.style.display = 'none';
    if (categoryList) categoryList.style.display = 'none';
    if (playlistList) playlistList.style.display = 'none';
    if (playlistQueueList) playlistQueueList.style.display = 'none';

    // Initial exercise load
    displayedExercises = filterExercisesForMode();
    if (displayedExercises.length > 0) {
        currentExerciseIndex = 0;
        currentSelectedExercise = displayedExercises[currentExerciseIndex];
        initializeExercise(currentSelectedExercise);
        if (exerciseSearchInput) exerciseSearchInput.placeholder = currentSelectedExercise.name;
    } else {
        if (exerciseSearchInput) exerciseSearchInput.placeholder = "Search Exercises...";
    }

    if (autoRandomizeToggle) {
        autoRandomizeToggle.addEventListener('change', function() {
            isRandomizeEnabled = this.checked;
            currentRepCount = 0;
        });
    }

    if (repsPerTempoInput) {
        repsPerTempoInput.addEventListener('input', function() {
            const val = parseInt(this.value);
            repsBeforeChange = (!isNaN(val) && val > 0) ? val : 1;
        });
    }

    if (randomExerciseBtn) {
        randomExerciseBtn.addEventListener('click', function() {
            if (isPlayingPlaylist) {
                stopPlaylist();
            }
            pickRandomExercise();
        });
    }

    if (randomTempoBtn) {
        randomTempoBtn.addEventListener('click', function() {
            if (isPlayingPlaylist) {
                stopPlaylist();
            }
            pickRandomTempo();
            if (audio) {
                audio.pause();
                resetProgressBar();
            }
            if (playPauseBtn) playPauseBtn.textContent = 'Play';
        });
    }

    if (playPauseBtn && audio) {
        playPauseBtn.addEventListener('click', function() {
            if (audio.paused) {
                if (audio.readyState < 3) {
                    audio.load();
                }
                audio.play().then(() => {
                    this.textContent = 'Pause';
                    updateProgressBarSmoothly();
                }).catch((error) => {
                    console.error('Error playing audio:', error);
                    alert('Audio is not ready yet. Please wait a moment.');
                });
            } else {
                audio.pause();
                this.textContent = 'Play';
            }
        });
    }

    if (audio) {
        audio.addEventListener('ended', function() {
            if (isPlayingPlaylist) {
                return; // handled by playlist logic
            }

            if (isRandomizeEnabled && currentSelectedExercise) {
                currentRepCount++;
                if (currentRepCount >= repsBeforeChange) {
                    pickRandomTempo();
                    currentRepCount = 0;
                }
            }
            audio.currentTime = 0;
            audio.play();
            if (playPauseBtn) playPauseBtn.textContent = 'Pause';
            updateProgressBarSmoothly();
        });
    }

    if (volumeSlider && audio && volumePercentageDisplay) {
        volumeSlider.addEventListener('input', function() {
            audio.volume = this.value;
            volumePercentageDisplay.textContent = Math.round(this.value * 100) + '%';
            updateSliderBackground(this, '#96318d', '#ffffff');
        });
    }

    if (tempoSlider) {
        tempoSlider.addEventListener('input', function() {
            updatePlaybackRate();
            updateSliderBackground(this, '#96318d', '#ffffff');
        });
    }

    if (progressContainer) {
        progressContainer.addEventListener('mousedown', startDragging);
        progressContainer.addEventListener('touchstart', startDragging);
    }
    document.addEventListener('mousemove', dragProgress);
    document.addEventListener('touchmove', dragProgress);
    document.addEventListener('mouseup', stopDragging);
    document.addEventListener('touchend', stopDragging);

    if (prevExerciseBtn) {
        prevExerciseBtn.addEventListener('click', () => navigateExercise(-1));
    }

    if (nextExerciseBtn) {
        nextExerciseBtn.addEventListener('click', () => navigateExercise(1));
    }

    if (stopPlaylistBtn) {
        stopPlaylistBtn.addEventListener('click', function() {
            if (isPlayingPlaylist) {
                stopPlaylist();
            }
        });
    }

    if (prevPlaylistItemBtn) {
        prevPlaylistItemBtn.addEventListener('click', function() {
            if (isPlayingPlaylist && playlistQueueMap.length > 0) {
                let currentOptionIndex = getCurrentPlaylistQueueIndex();
                if (currentOptionIndex > 0) {
                    currentOptionIndex--;
                    const position = playlistQueueMap[currentOptionIndex];
                    currentPlaylistItemIndex = position.playlistItemIndex;
                    currentTempoIndex = position.tempoIndex;
                    currentRepetition = position.repetition;
                    updatePlaylistQueueDisplay();
                    updatePlaylistProgressBar();
                    playCurrentPlaylistItem();
                }
            }
        });
    }

    if (nextPlaylistItemBtn) {
        nextPlaylistItemBtn.addEventListener('click', function() {
            if (isPlayingPlaylist && playlistQueueMap.length > 0) {
                let currentOptionIndex = getCurrentPlaylistQueueIndex();
                if (currentOptionIndex < playlistQueueMap.length - 1) {
                    currentOptionIndex++;
                    const position = playlistQueueMap[currentOptionIndex];
                    currentPlaylistItemIndex = position.playlistItemIndex;
                    currentTempoIndex = position.tempoIndex;
                    currentRepetition = position.repetition;
                    updatePlaylistQueueDisplay();
                    updatePlaylistProgressBar();
                    playCurrentPlaylistItem();
                }
            }
        });
    }

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.exercise-container') && exerciseList) {
            exerciseList.style.display = 'none';
        }
        if (!e.target.closest('.category-container') && categoryList) {
            categoryList.style.display = 'none';
        }
        if (!e.target.closest('.playlist-container') && playlistList) {
            playlistList.style.display = 'none';
        }
        if (!e.target.closest('.playlist-queue-container') && playlistQueueList) {
            playlistQueueList.style.display = 'none';
        }
    });

    if (exerciseSearchInput) {
        exerciseSearchInput.addEventListener('focus', () => {
            populateExerciseList(exerciseSearchInput.value);
        });

        exerciseSearchInput.addEventListener('input', () => {
            populateExerciseList(exerciseSearchInput.value);
        });
    }

    if (categorySearchInput) {
        categorySearchInput.addEventListener('focus', () => {
            populateCategoryList(categorySearchInput.value);
        });

        categorySearchInput.addEventListener('input', () => {
            populateCategoryList(categorySearchInput.value);
        });
    }

    if (playlistSearchInput) {
        playlistSearchInput.addEventListener('focus', () => {
            populatePlaylistList(playlistSearchInput.value);
        });

        playlistSearchInput.addEventListener('input', () => {
            populatePlaylistList(playlistSearchInput.value);
        });
    }

    if (playlistQueueSearchInput) {
        playlistQueueSearchInput.addEventListener('focus', () => {
            populatePlaylistQueueList(playlistQueueSearchInput.value);
        });

        playlistQueueSearchInput.addEventListener('input', () => {
            populatePlaylistQueueList(playlistQueueSearchInput.value);
        });
    }

    if (audio) {
        audio.addEventListener('loadedmetadata', updateTotalTime);
        audio.addEventListener('ratechange', updateTotalTime);
        audio.addEventListener('ratechange', updateCurrentTime);
    }

    function filterExercisesForMode() {
        if (isPlayingPlaylist && currentPlaylist) {
            const playlistExerciseIds = currentPlaylist.items.map(i => i.exerciseId);
            return exercises.filter(ex => playlistExerciseIds.includes(ex.id));
        } else {
            let selectedCategory = getSelectedCategory();
            return exercises.filter(ex => selectedCategory === 'all' || ex.category.includes(selectedCategory));
        }
    }

    function getSelectedCategory() {
        if (!categorySearchInput) return 'all';

        let placeholder = categorySearchInput.placeholder;
        if (placeholder === '' || placeholder === 'All Categories') {
            return 'all';
        }
        let entry = Object.entries(categoryDisplayMap).find(([key, val]) => val.toLowerCase() === placeholder.toLowerCase());
        return entry ? entry[0] : 'all';
    }

    function initializeExercise(ex) {
        if (!audio || !tempoSlider || !tempoLabel || !sheetMusicImg) return;
        audio.src = ex.audioSrc;
        audio.preload = 'auto';
        audio.load();
        sheetMusicImg.src = ex.sheetMusicSrc;
        tempoSlider.min = ex.originalTempo / 2;
        tempoSlider.max = ex.originalTempo * 2;
        tempoSlider.value = ex.originalTempo;
        tempoLabel.textContent = 'BPM: ' + ex.originalTempo;
        updatePlaybackRate();
        updateSliderBackground(tempoSlider, '#96318d', '#ffffff');
        if (volumeSlider) updateSliderBackground(volumeSlider, '#96318d', '#ffffff');
        audio.onloadedmetadata = updateTotalTime;
        if (minTempoInput) minTempoInput.value = '';
        if (maxTempoInput) maxTempoInput.value = '';
        resetProgressBar();
        audio.pause();
        if (playPauseBtn) playPauseBtn.textContent = 'Play';
    }

    function updatePlaybackRate() {
        if (!audio || !tempoSlider) return;
        const currentTempo = parseInt(tempoSlider.value);
        const originalTempo = parseInt(tempoSlider.max) / 2;
        const playbackRate = currentTempo / originalTempo;
        audio.playbackRate = playbackRate;
        if (tempoLabel) tempoLabel.textContent = 'BPM: ' + currentTempo;
        updateTotalTime();
        updateCurrentTime();
    }

    function resetProgressBar() {
        if (progress && currentTimeDisplay && audio) {
            progress.style.width = '0%';
            currentTimeDisplay.textContent = '0:00';
            audio.currentTime = 0;
        }
    }

    function updateSliderBackground(slider, color1, color2) {
        if (!slider) return;
        const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
        slider.style.background = `linear-gradient(to right, ${color1} 0%, ${color1} ${value}%, ${color2} ${value}%, ${color2} 100%)`;
    }

    function formatTime(timeInSeconds) {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    }

    function updateTotalTime() {
        if (audio && totalTimeDisplay && audio.duration) {
            const duration = audio.duration / audio.playbackRate;
            totalTimeDisplay.textContent = formatTime(duration);
        }
    }

    function updateCurrentTime() {
        if (!audio || !currentTimeDisplay) return;
        const currentTime = audio.currentTime / audio.playbackRate;
        currentTimeDisplay.textContent = formatTime(currentTime);
    }

    function updateProgressBarSmoothly() {
        if (!audio || !progress || !currentTimeDisplay) return;
        if (!audio.paused) {
            const progressPercent = (audio.currentTime / audio.duration) * 100;
            progress.style.width = progressPercent + '%';
            updateCurrentTime();
            requestAnimationFrame(updateProgressBarSmoothly);
        }
    }

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
        if (!audio || !progressContainer || !progress) return;
        const rect = progressContainer.getBoundingClientRect();
        let x;
        if (e.type.startsWith('touch')) {
            x = e.touches[0].clientX - rect.left;
        } else {
            x = e.clientX - rect.left;
        }
        const width = progressContainer.clientWidth;
        let clickedValue = x / width;
        clickedValue = Math.min(1, Math.max(0, clickedValue));
        audio.currentTime = clickedValue * audio.duration;
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progress.style.width = progressPercent + '%';
        updateCurrentTime();
    }

    function pickRandomExercise() {
        const filteredExercises = filterExercisesForMode();
        if (filteredExercises.length === 0) return;
        const randomIndex = Math.floor(Math.random() * filteredExercises.length);
        currentExerciseIndex = randomIndex;
        currentSelectedExercise = filteredExercises[currentExerciseIndex];
        if (exerciseSearchInput) {
            exerciseSearchInput.value = '';
            exerciseSearchInput.placeholder = currentSelectedExercise.name;
        }
        initializeExercise(currentSelectedExercise);
        if (audio) {
            audio.pause();
            resetProgressBar();
        }
        if (playPauseBtn) playPauseBtn.textContent = 'Play';

        if (isPlayingPlaylist && currentPlaylist) {
            const idx = currentPlaylist.items.findIndex(i => i.exerciseId === currentSelectedExercise.id);
            if (idx !== -1) {
                currentPlaylistItemIndex = idx;
                currentTempoIndex = 0;
                currentRepetition = 0;
                updatePlaylistQueueDisplay();
                updatePlaylistProgressBar();
                playCurrentPlaylistItem();
            }
        }
    }

    function pickRandomTempo() {
        if (!currentSelectedExercise || !tempoSlider) return;
        let minTempo = parseInt(minTempoInput ? minTempoInput.value : '');
        let maxTempo = parseInt(maxTempoInput ? maxTempoInput.value : '');

        const defaultMin = Math.floor(currentSelectedExercise.originalTempo / 2);
        const defaultMax = currentSelectedExercise.originalTempo * 2;

        if (isNaN(minTempo) || minTempo < 1 || minTempo > 999) {
            minTempo = defaultMin;
        }
        if (isNaN(maxTempo) || maxTempo < 1 || maxTempo > 999) {
            maxTempo = defaultMax;
        }

        if (minTempo > maxTempo) {
            [minTempo, maxTempo] = [maxTempo, minTempo];
        }

        const sliderMin = parseInt(tempoSlider.min);
        const sliderMax = parseInt(tempoSlider.max);
        minTempo = Math.max(minTempo, sliderMin);
        maxTempo = Math.min(maxTempo, sliderMax);

        const randomTempo = Math.floor(Math.random() * (maxTempo - minTempo + 1)) + minTempo;
        tempoSlider.value = randomTempo;
        updatePlaybackRate();
        updateSliderBackground(tempoSlider, '#96318d', '#ffffff');
    }

    function navigateExercise(direction) {
        displayedExercises = filterExercisesForMode();
        if (displayedExercises.length === 0) return;
        currentExerciseIndex += direction;
        if (currentExerciseIndex < 0) currentExerciseIndex = displayedExercises.length - 1;
        if (currentExerciseIndex >= displayedExercises.length) currentExerciseIndex = 0;

        currentSelectedExercise = displayedExercises[currentExerciseIndex];
        if (exerciseSearchInput) {
            exerciseSearchInput.value = '';
            exerciseSearchInput.placeholder = currentSelectedExercise.name;
        }
        initializeExercise(currentSelectedExercise);
        if (audio) {
            audio.pause();
            resetProgressBar();
        }
        if (playPauseBtn) playPauseBtn.textContent = 'Play';

        if (isPlayingPlaylist && currentPlaylist) {
            const idx = currentPlaylist.items.findIndex(i => i.exerciseId === currentSelectedExercise.id);
            if (idx !== -1) {
                currentPlaylistItemIndex = idx;
                currentTempoIndex = 0;
                currentRepetition = 0;
                updatePlaylistQueueDisplay();
                updatePlaylistProgressBar();
                playCurrentPlaylistItem();
            }
        }

        populateExerciseList();
    }

    function populateExerciseList(filter = '') {
        if (!exerciseList) return;
        exerciseList.innerHTML = '';
        displayedExercises = filterExercisesForMode().filter(ex => ex.name.toLowerCase().includes(filter.toLowerCase()));
        displayedExercises.forEach((exercise, idx) => {
            const li = document.createElement('li');
            li.textContent = exercise.name;
            li.dataset.id = exercise.id;
            if (exercise === currentSelectedExercise && idx === currentExerciseIndex) {
                li.classList.add('active-option');
            }
            li.addEventListener('click', () => {
                currentExerciseIndex = displayedExercises.indexOf(exercise);
                currentSelectedExercise = exercise;
                selectExercise(exercise);
            });
            exerciseList.appendChild(li);
        });

        if (displayedExercises.length > 0 && document.activeElement === exerciseSearchInput) {
            exerciseList.style.display = 'block';
        } else {
            exerciseList.style.display = 'none';
        }
    }

    function selectExercise(exercise) {
        if (exerciseSearchInput) {
            exerciseSearchInput.value = '';
            exerciseSearchInput.placeholder = exercise.name;
        }
        if (exerciseList) exerciseList.style.display = 'none';
        initializeExercise(exercise);
        if (audio) {
            audio.pause();
            resetProgressBar();
        }
        if (playPauseBtn) playPauseBtn.textContent = 'Play';

        if (isPlayingPlaylist && currentPlaylist) {
            const idx = currentPlaylist.items.findIndex(i => i.exerciseId === exercise.id);
            if (idx !== -1) {
                currentPlaylistItemIndex = idx;
                currentTempoIndex = 0;
                currentRepetition = 0;
                updatePlaylistQueueDisplay();
                updatePlaylistProgressBar();
                playCurrentPlaylistItem();
            }
        }
    }

    function initializeCategoryList() {
        if (categorySearchInput) categorySearchInput.placeholder = "All Categories";
    }

    function populateCategoryList(filter = '') {
        if (!categoryList) return;
        categoryList.innerHTML = '';
        const filteredCats = displayedCategories.filter(cat => cat.toLowerCase().includes(filter.toLowerCase()));
        filteredCats.forEach(cat => {
            const li = document.createElement('li');
            const displayName = categoryDisplayMap[cat] || cat;
            li.textContent = displayName;
            if (categorySearchInput && li.textContent === categorySearchInput.placeholder) {
                li.classList.add('active-option');
            }
            li.addEventListener('click', () => {
                if (categorySearchInput) {
                    categorySearchInput.value = '';
                    categorySearchInput.placeholder = displayName;
                }
                categoryList.style.display = 'none';
                if (isPlayingPlaylist) {
                    stopPlaylist();
                }
                currentExerciseIndex = 0;
                const filtered = filterExercisesForMode();
                if (filtered.length > 0) {
                    currentSelectedExercise = filtered[currentExerciseIndex];
                    initializeExercise(currentSelectedExercise);
                    if (exerciseSearchInput) {
                        exerciseSearchInput.value = '';
                        exerciseSearchInput.placeholder = currentSelectedExercise.name;
                    }
                    if (audio) {
                        audio.pause();
                        resetProgressBar();
                    }
                    if (playPauseBtn) playPauseBtn.textContent = 'Play';
                } else {
                    currentSelectedExercise = null;
                    if (exerciseSearchInput) {
                        exerciseSearchInput.value = '';
                        exerciseSearchInput.placeholder = "Search Exercises...";
                    }
                }
                populateExerciseList();
            });
            categoryList.appendChild(li);
        });

        if (filteredCats.length > 0 && document.activeElement === categorySearchInput) {
            categoryList.style.display = 'block';
        } else {
            categoryList.style.display = 'none';
        }
    }

    function initializePlaylistList() {
        if (playlistSearchInput) playlistSearchInput.placeholder = "Select a Playlist";
    }

    function populatePlaylistList(filter = '') {
        if (!playlistList) return;
        playlistList.innerHTML = '';
        const filteredPlaylists = displayedPlaylists.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));
        filteredPlaylists.forEach(pl => {
            const li = document.createElement('li');
            li.textContent = pl.name;
            li.dataset.index = pl.index;
            if (currentPlaylist && currentPlaylist.name === pl.name) {
                li.classList.add('active-option');
            }
            li.addEventListener('click', () => {
                if (playlistSearchInput) {
                    playlistSearchInput.value = '';
                    playlistSearchInput.placeholder = li.textContent;
                }
                playlistList.style.display = 'none';
                if (isPlayingPlaylist) {
                    stopPlaylist();
                }
                startPlaylist(pl.index);
            });
            playlistList.appendChild(li);
        });

        if (filteredPlaylists.length > 0 && document.activeElement === playlistSearchInput) {
            playlistList.style.display = 'block';
        } else {
            playlistList.style.display = 'none';
        }
    }

    function populatePlaylistQueueList(filter = '') {
        if (!playlistQueueList) return;
        playlistQueueList.innerHTML = '';
        if (!isPlayingPlaylist || !currentPlaylist || playlistQueueMap.length === 0) {
            playlistQueueList.style.display = 'none';
            return;
        }

        const filteredQueue = playlistQueueMap
            .map((pos, idx) => {
                const pItem = currentPlaylist.items[pos.playlistItemIndex];
                const ex = exercises.find(exx => exx.id === pItem.exerciseId);
                if (!ex) return null;
                const tempoVal = pItem.tempos[pos.tempoIndex];
                return { idx, text: `${ex.name} at ${tempoVal} BPM`, pos };
            })
            .filter(x => x && x.text.toLowerCase().includes(filter.toLowerCase()));

        filteredQueue.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.text;
            if (item.pos.playlistItemIndex === currentPlaylistItemIndex &&
                item.pos.tempoIndex === currentTempoIndex &&
                item.pos.repetition === currentRepetition) {
                li.classList.add('active-option');
            }
            li.addEventListener('click', () => {
                currentPlaylistItemIndex = item.pos.playlistItemIndex;
                currentTempoIndex = item.pos.tempoIndex;
                currentRepetition = item.pos.repetition;
                if (playlistQueueSearchInput) {
                    playlistQueueSearchInput.value = '';
                    playlistQueueSearchInput.placeholder = 'Playlist Queue';
                }
                playlistQueueList.style.display = 'none';
                updatePlaylistQueueDisplay();
                updatePlaylistProgressBar();
                playCurrentPlaylistItem();
            });
            playlistQueueList.appendChild(li);
        });

        if (filteredQueue.length > 0 && document.activeElement === playlistQueueSearchInput) {
            playlistQueueList.style.display = 'block';
        } else {
            playlistQueueList.style.display = 'none';
        }
    }

    function startPlaylist(playlistId) {
        currentPlaylist = playlists[playlistId];
        currentPlaylistItemIndex = 0;
        currentTempoIndex = 0;
        currentRepetition = 0;
        isPlayingPlaylist = true;

        document.body.classList.add('playlist-mode');
        if (categorySearchInput) categorySearchInput.placeholder = "All Categories";

        if (categorySearchInput) categorySearchInput.disabled = true;
        if (minTempoInput) minTempoInput.disabled = true;
        if (maxTempoInput) maxTempoInput.disabled = true;
        if (randomExerciseBtn) randomExerciseBtn.disabled = true;
        if (randomTempoBtn) randomTempoBtn.disabled = true;
        if (autoRandomizeToggle) autoRandomizeToggle.disabled = true;
        if (repsPerTempoInput) repsPerTempoInput.disabled = true;
        if (tempoSlider) tempoSlider.disabled = true;

        const autoLabel = document.querySelector('.auto-label');
        if (autoLabel) {
            autoLabel.classList.add('disabled');
        }

        const randomContainer = document.querySelector('.random-container');
        if (randomContainer) {
            randomContainer.classList.add('disabled');
        }

        if (prevPlaylistItemBtn) prevPlaylistItemBtn.disabled = false;
        if (nextPlaylistItemBtn) nextPlaylistItemBtn.disabled = false;
        if (stopPlaylistBtn) stopPlaylistBtn.disabled = false;
        if (playlistQueueSearchInput) playlistQueueSearchInput.disabled = false;
        if (playlistProgressContainer) playlistProgressContainer.style.display = 'flex';

        displayedExercises = filterExercisesForMode();
        if (displayedExercises.length > 0) {
            currentExerciseIndex = 0;
            currentSelectedExercise = displayedExercises[0];
        }

        playCurrentPlaylistItem();
    }

    function playCurrentPlaylistItem() {
        if (!currentPlaylist) return;
        const item = currentPlaylist.items[currentPlaylistItemIndex];
        const exerciseId = item.exerciseId;
        const exercise = exercises.find(ex => ex.id === exerciseId);

        if (!exercise) {
            console.error('Exercise not found: ' + exerciseId);
            return;
        }

        currentSelectedExercise = exercise;
        displayedExercises = filterExercisesForMode();
        currentExerciseIndex = displayedExercises.indexOf(exercise);

        if (exerciseSearchInput) {
            exerciseSearchInput.value = '';
            exerciseSearchInput.placeholder = exercise.name;
        }

        initializeExercise(exercise);

        const tempo = item.tempos[currentTempoIndex];
        if (tempoSlider) tempoSlider.value = tempo;
        updatePlaybackRate();
        if (tempoSlider) updateSliderBackground(tempoSlider, '#96318d', '#ffffff');

        if (playlistQueueSearchInput) {
            playlistQueueSearchInput.placeholder = exercise.name + " at " + tempo + " BPM";
        }

        playExerciseRepetitions(item.repetitionsPerTempo);
        updatePlaylistQueueDisplay();
        updatePlaylistProgressBar();
    }

    function playExerciseRepetitions(repetitions) {
        function playNextRepetition() {
            if (!audio) return;
            if (currentRepetition < repetitions) {
                audio.currentTime = 0;
                audio.onended = null;
                audio.play();
                if (playPauseBtn) playPauseBtn.textContent = 'Pause';
                updateProgressBarSmoothly();

                audio.onended = function() {
                    currentRepetition++;
                    updatePlaylistQueueDisplay();
                    updatePlaylistProgressBar();
                    playNextRepetition();
                };

            } else {
                currentTempoIndex++;
                currentRepetition = 0;
                if (currentTempoIndex >= currentPlaylist.items[currentPlaylistItemIndex].tempos.length) {
                    currentPlaylistItemIndex++;
                    currentTempoIndex = 0;
                    if (currentPlaylistItemIndex >= currentPlaylist.items.length) {
                        // Playlist done
                        isPlayingPlaylist = false;
                        currentPlaylist = null;
                        stopPlaylist();
                        return;
                    }
                }
                updatePlaylistQueueDisplay();
                updatePlaylistProgressBar();
                playCurrentPlaylistItem();
            }
        }
        playNextRepetition();
    }

    function stopPlaylist() {
        if (audio) audio.pause();
        isPlayingPlaylist = false;
        currentPlaylist = null;
        if (playPauseBtn) playPauseBtn.textContent = 'Play';
        resetPlaylistControls();
        resetProgressBar();
        displayedExercises = filterExercisesForMode();
        populateExerciseList();

        if (playPauseBtn) playPauseBtn.classList.remove('playlist-mode');

        if (categorySearchInput) categorySearchInput.disabled = false;
        if (minTempoInput) minTempoInput.disabled = false;
        if (maxTempoInput) maxTempoInput.disabled = false;
        if (randomExerciseBtn) randomExerciseBtn.disabled = false;
        if (randomTempoBtn) randomTempoBtn.disabled = false;
        if (autoRandomizeToggle) autoRandomizeToggle.disabled = false;
        if (repsPerTempoInput) repsPerTempoInput.disabled = false;
        if (tempoSlider) tempoSlider.disabled = false;

        const autoLabel = document.querySelector('.auto-label');
        if (autoLabel) {
            autoLabel.classList.remove('disabled');
        }

        const randomContainer = document.querySelector('.random-container');
        if (randomContainer) {
            randomContainer.classList.remove('disabled');
        }

        if (exerciseSearchInput) {
            exerciseSearchInput.value = '';
            exerciseSearchInput.placeholder = currentSelectedExercise ? currentSelectedExercise.name : "Search Exercises...";
        }

        document.body.classList.remove('playlist-mode');
        if (playlistQueueSearchInput) playlistQueueSearchInput.placeholder = 'Playlist Queue';
    }

    function resetPlaylistControls() {
        if (stopPlaylistBtn) stopPlaylistBtn.disabled = true;
        if (playlistQueueSearchInput) playlistQueueSearchInput.disabled = true;
        if (prevPlaylistItemBtn) prevPlaylistItemBtn.disabled = true;
        if (nextPlaylistItemBtn) nextPlaylistItemBtn.disabled = true;
        if (playPauseBtn) playPauseBtn.textContent = 'Play';
        if (playlistSearchInput) playlistSearchInput.placeholder = 'Select a Playlist';
        if (playlistQueueSearchInput) playlistQueueSearchInput.placeholder = 'Playlist Queue';
        if (playlistProgressContainer) playlistProgressContainer.style.display = 'none';
        updatePlaylistQueueDisplay();
        updatePlaylistProgressBar();
    }

    function updatePlaylistQueueDisplay() {
        if (!playlistQueueList) return;
        playlistQueueList.innerHTML = '';
        playlistQueueMap = [];

        if (!isPlayingPlaylist || !currentPlaylist) {
            playlistQueueList.style.display = 'none';
            return;
        }

        currentPlaylist.items.forEach((item, i) => {
            item.tempos.forEach((t, ti) => {
                for (let r = 0; r < item.repetitionsPerTempo; r++) {
                    playlistQueueMap.push({
                        playlistItemIndex: i,
                        tempoIndex: ti,
                        repetition: r
                    });
                }
            });
        });
        populatePlaylistQueueList();
    }

    function getCurrentPlaylistQueueIndex() {
        return playlistQueueMap.findIndex(pos =>
            pos.playlistItemIndex === currentPlaylistItemIndex &&
            pos.tempoIndex === currentTempoIndex &&
            pos.repetition === currentRepetition
        );
    }

    function updatePlaylistProgressBar() {
        if (!playlistProgress || !playlistProgressPercentage) return;
        if (!isPlayingPlaylist || !currentPlaylist || playlistQueueMap.length === 0) {
            playlistProgress.style.width = '0%';
            playlistProgressPercentage.textContent = '0%';
            return;
        }

        const currentIndex = getCurrentPlaylistQueueIndex();
        if (currentIndex === -1) {
            playlistProgress.style.width = '0%';
            playlistProgressPercentage.textContent = '0%';
            return;
        }

        const totalItems = playlistQueueMap.length;
        const progressPercent = ((currentIndex + 1) / totalItems) * 100;
        playlistProgress.style.width = progressPercent + '%';
        playlistProgressPercentage.textContent = Math.floor(progressPercent) + '%';
    }
});
