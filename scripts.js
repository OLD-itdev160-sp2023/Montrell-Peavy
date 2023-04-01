


(function() {
var data = [
    {
        name: 'emmet',
        description: 'Emmet is the number one code snippet tool.',
        author: 'emmptio',
        url: 'https://atom.io/packages/emmet',
        downloads: 1862209,
        stars: 2456,
        price: 10.50,
        selector: 'p1'
    },
    {
        name: 'atom-beautify',
        description: 'The atom-beautify package will clear up your code.',
        author: 'Glavir001',
        url: 'https://atom.io/packages/atom-beautify',
        downloads: 4228040,
        stars: 4541,
        price: 6.75,
        selector: 'p2'
    }
    
];

    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

        this.getFormattedDownloads = function(){
            return this.downloads.toLocalString();
        };

        this.getFormattedStars = function(){
            return this.stars.toLocalString();
        };
    }

    var getTodaysDate = function(){
        var today = new Date();
        return today.toDateString();
    };

        var getEl = function(id){
            return document.getElementById(id);
        };
    
        var writePackageInfo = function(package){
            var selector = package.selector,
            nameEl = getEl(selector + '-name'),
            descEl = getEl(selector + '-description'),
            authEl = getEl(selector + '-author'),
            downloadEl = getEl(selector + '-downloads'),
            starsEl = getEl(selector + '-stars');

            nameEl.textContent = package.name;
            descEl.textContent = package.description;
            authEl.textContent = package.author;
            downloadEl.textContent = package.getFormattedDownloads();
            starsEl.textContent = package.getFormattedStars();

        };

        var dataEl = getEl('date');
        dataEl.textContent = getTodaysDate();

        var emmet = new package(data[0]);
        writePackageInfo(emmet);

        var beautify = new package(data[1]);
        writePackageInfo(beautify);
}());