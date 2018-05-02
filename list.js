window.list={
    elements: [],
    onAdd:function(index, element){},
    onChangeActiveStatus: function(index, activeStatus) {},
    add: function (name) {
        this.elements.push({
            "name":name,
            "active": true
        });
        var
            index = this.elements.length-1;
        this.onAdd(index, this.elements[index])
    },
    setActiveStatus: function (i, activeStatus) {
        this.elements[i].active=activeStatus;
        this.onChangeActiveStatus(i, activeStatus);
    },
    getActiveElements: function () {
        return this.elements.filter(function (el) {
            return el.active
        })
    }
};