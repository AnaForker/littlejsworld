var map1 = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,4,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,5,0,1,1],
            [1,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];

var map2 = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,3,0,0,1,0,0,0,0,0,0,0,0,0,3,0,0,1,1],
            [1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1],
            [1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1],
            [1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1],
            [1,0,0,0,1,1,0,2,0,0,0,1,0,0,0,0,2,0,1,1,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,3,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,2,0,0,1,1,1,0,0,2,0,1,1],
            [1,0,4,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,5,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];

var map3 = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1],
            [1,0,0,4,0,0,1,0,0,0,0,0,2,0,0,0,0,0,1,0,0,5,0,0,1,1],
            [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,2,0,0,0,1,1],
            [1,0,0,0,0,0,1,0,2,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,2,0,1,1],
            [1,0,0,2,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,1,0,0,0,2,0,1,0,0,0,3,0,1,0,0,2,0,0,1,1],
            [1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,1,0,0,0,0,0,1,0,3,0,0,0,1,0,0,0,2,0,1,1],
            [1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,3,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,2,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];

var map4 = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,3,0,0,0,0,0,0,3,0,0,0,0,0,4,0,0,1,1],
            [1,0,0,2,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,3,0,0,0,0,3,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,2,0,0,0,3,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1],
            [1,0,0,0,0,3,0,0,0,0,0,0,3,0,0,0,0,0,2,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,2,0,0,0,0,3,0,0,0,0,0,3,0,0,0,0,0,0,0,0,1,1],
            [1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,2,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];

var map5 = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,1,1,1,1],
            [1,1,1,1,0,0,3,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,1,1,1,1],
            [1,1,1,1,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
            [1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,3,0,1,1,1,1],
            [1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1],
            [1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1],
            [1,0,5,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,2,0,1],
            [1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,6,0,1],
            [1,0,4,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,2,0,0,0,0,1],
            [1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1],
            [1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,3,0,1,1,1,1],
            [1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1],
            [1,1,1,1,3,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
            [1,1,1,1,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,1,1,1,1],
            [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];

var map6 = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1],
            [1,0,4,0,0,0,0,3,0,0,3,0,0,3,0,0,0,0,0,1,0,6,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,2,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,2,0,1,1],
            [1,0,6,0,0,0,0,3,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,2,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,2,0,1,1],
            [1,0,5,0,0,2,0,0,0,3,0,0,3,0,0,0,0,0,0,1,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,1,0,2,0,0,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,2,0,1,1],
            [1,0,6,0,0,2,0,0,3,0,0,2,0,0,0,0,2,0,0,0,0,2,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];

var map7 = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,1,0,0,0,0,0,0,0,6,0,0,0,2,0,0,0,1,0,0,6,1,1],
            [1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1],
            [1,0,3,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,3,0,1,1],
            [1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1],
            [1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1],
            [1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1],
            [1,0,0,0,1,0,0,1,0,0,1,0,4,0,1,0,0,1,0,0,1,0,0,0,1,1],
            [1,0,0,0,0,0,0,1,0,0,1,0,5,0,1,0,0,1,0,0,0,0,0,0,1,1],
            [1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1],
            [1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1],
            [1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1],
            [1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1],
            [1,0,3,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,3,0,1,1],
            [1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1],
            [1,6,0,0,1,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];

var map8 = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,4,0,1,0,6,1,0,6,1,0,6,1,0,0,0,0,0,1,0,0,0,0,0,1,1],
            [1,0,0,1,0,0,1,0,0,1,0,3,1,0,0,0,0,3,1,3,0,0,0,3,1,1],
            [1,0,0,1,0,3,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1],
            [1,0,0,1,0,0,1,0,0,1,0,3,1,0,0,1,0,0,1,0,0,1,0,0,1,1],
            [1,0,0,1,0,0,1,0,3,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1],
            [1,0,0,1,0,0,1,0,0,1,0,3,1,0,0,1,0,0,1,0,0,1,0,0,1,1],
            [1,0,0,0,0,3,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1],
            [1,0,0,0,0,0,0,0,3,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1],
            [1,5,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,2,0,0,0,1,0,0,1,1],
            [1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,3,0,1,1],
            [1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1],
            [1,3,0,1,0,3,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1],
            [1,0,0,0,0,0,1,2,0,0,0,0,1,0,0,0,2,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,1,0,0,0,0,2,1,0,0,0,0,0,0,0,2,0,0,0,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];

var map9 = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,3,1,0,0,1,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1,0,0,0,3,0,0,2,0,1,1],
            [1,0,0,0,2,0,0,0,2,0,0,0,1,0,0,1,0,0,0,0,5,0,0,0,1,1],
            [1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,2,0,0,0,3,0,0,1,1],
            [1,0,1,0,0,0,0,0,3,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,1,0,0,0,0,0,0,0,6,1,0,0,1,0,0,0,0,0,0,0,0,1,1],
            [1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1],
            [1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,2,0,0,0,0,0,0,1,1],
            [1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,2,0,1,1],
            [1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1],
            [1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1],
            [1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,2,0,0,0,0,1,1],
            [1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1],
            [1,0,4,0,1,0,0,0,1,0,0,0,1,3,0,0,0,0,0,2,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];

var map10 = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,1,0,0,0,3,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,3,0,0,0,0,0,0,0,0,3,1,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,1,0,0,0,0,0,0,3,0,0,0,1,0,0,0,0,2,1,0,0,1,1],
            [1,0,0,0,1,0,0,0,3,2,0,0,2,0,0,1,0,0,0,2,0,1,0,0,1,1],
            [1,0,0,0,0,3,0,0,0,0,0,0,0,0,3,1,0,0,2,0,0,1,0,0,1,1],
            [1,0,0,0,1,0,0,0,0,0,0,3,0,0,0,1,0,2,0,0,0,1,0,0,1,1],
            [1,0,0,0,1,0,0,0,3,0,0,0,0,0,0,1,2,0,0,0,0,1,0,0,1,1],
            [1,0,5,0,1,3,2,0,0,0,2,0,0,0,3,1,0,0,0,0,2,1,0,0,1,1],
            [1,0,0,0,1,0,0,0,0,0,0,3,0,0,0,1,0,0,0,2,0,1,0,0,1,1],
            [1,0,0,0,1,0,0,0,3,0,0,0,0,0,0,1,0,0,2,0,0,1,0,0,1,1],
            [1,0,0,0,0,3,0,0,0,0,0,0,0,0,3,1,0,2,0,0,0,1,0,0,1,1],
            [1,0,0,0,1,0,2,0,0,0,0,3,2,0,0,1,2,0,0,0,0,1,0,0,1,1],
            [1,0,0,0,1,0,0,0,3,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1],
            [1,0,0,0,0,3,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,1,0,4,1,1],
            [1,0,0,0,1,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];

var Maps = {
    Player:  new GameObj.Player(-25, -25, 20),

    Block: function(x,y,size){
        this.spawn = [x, y,
          x+size, y,
          x+size, y+size,
          x, y+size];
    
        this.size = size;
        this.x = this.spawn[0];
        this.y = this.spawn[1];
    
        this.draw = function() {
          ctx.beginPath();
          ctx.moveTo(this.spawn[0], this.spawn[1]);
          ctx.lineTo(this.spawn[2], this.spawn[3]);
          ctx.lineTo(this.spawn[4], this.spawn[5]);
          ctx.lineTo(this.spawn[6], this.spawn[7]);
          ctx.closePath();
    
          ctx.fillStyle = "rgba(102, 102, 102, 1)";
          ctx.fill();
        }
    },

    MainMenu: function(){

        this.buildMap = function(){
            return 0;
        }

        this.update = function(deltaTime){
            ctx.font = "58px Arial";
            ctx.shadowColor = "green"
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.shadowBlur = 10;
            ctx.fillText("Little Js World",120,140);

            ctx.font = "22px Arial";
            ctx.shadowColor = "grey"
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.shadowBlur = 1;
            ctx.fillText("A simple JavaScript game",185,170);
            ctx.fillText("Made by Diego Penha",200,195);

            ctx.fillText("Use arrow keys to move",195,300);
            
            ctx.beginPath();
            ctx.moveTo(251, 365);
            ctx.lineTo(251, 415);
            ctx.lineTo(368, 415);
            ctx.lineTo(368, 365);
            ctx.closePath();
            ctx.lineWidth = 1;
            ctx.strokeStyle = "rgba(102, 102, 102, 1)";
            ctx.stroke();

            ctx.font = "32px Arial";
            ctx.shadowColor = "green"
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.shadowBlur = 2;
            ctx.fillText("Start",275,400);

            if(this.checkClick()){
                ctx.restore();
                Maps.Player.level++;
            }
        }

        this.checkClick = function(){
            return click[0] < 368 &&
            click[0] > 251 &&
            click[1] < 415 &&
            click[1] > 365;
        }
    },
    
    DeafultLevels: function(map){
        this.blockSize = 25;
        this.blocks = [];
        this.enemies = [];
        this.winblock = {};
        this.keyblocks = [];
        this.originalkeyblocks = [];
        this.keysNeeded = 0;
        this.hasDied = false;
        this.map = map;

        this.buildMap = function(){
            var i = 0;
            var j = 0;
            var b = 0;
            var c = 0;
            var d = 0;
            
            for(i=0; i < 26; i++){
                for(j=0; j < 20; j++){
                    if(this.map[j][i]==1){
                        this.blocks.push(new Maps.Block(i*this.blockSize, j*this.blockSize, this.blockSize));
                        this.blocks[b].draw();
                        b++;
                    }
                    else if(this.map[j][i]==2){
                        this.enemies.push(new GameObj.Enemy(i*this.blockSize, j*this.blockSize, 1, 0, 20, 0.1));
                        this.enemies[c].draw();
                        c++;
                    }
                    else if(this.map[j][i]==3){
                        this.enemies.push(new GameObj.Enemy(i*this.blockSize, j*this.blockSize, 0, 1, 20, 0.1));
                        this.enemies[c].draw();
                        c++;
                    }
                    else if(this.map[j][i]==4){
                        Maps.Player.newPosition(i*this.blockSize, j*this.blockSize, 20);
                    }
                    else if(this.map[j][i]==5){
                        this.winblock = new GameObj.WinBlock(i*this.blockSize, j*this.blockSize, 20);
                        this.winblock.draw();
                    }
                    else if(this.map[j][i]==6){
                        this.keyblocks.push(new GameObj.KeyBlock(i*this.blockSize, j*this.blockSize, 15));
                        this.keyblocks[d].draw();
                        d++;
                    }
                }
            }
            this.keysNeeded = this.keyblocks.length;
            this.originalkeyblocks = this.keyblocks.slice(0);
        }

        this.update = function(deltaTime){
            var y = 0;
            var x = 0;
            var z = 0;

            for(z=0; z < this.keyblocks.length ; z++){
                this.keyblocks[z].draw();
            }

            for(y=0; y < this.blocks.length ; y++){
                this.blocks[y].draw();
            }

            for(x=0; x < this.enemies.length ; x++){
                this.enemies[x].update(deltaTime, this.blocks);
            }

            this.hasDied = Maps.Player.update(this.enemies, this.blocks, this.winblock, this.keyblocks, this.keysNeeded);

            this.winblock.draw();

            this.drawHud();
            
            if(this.hasDied){
                this.keyblocks = this.originalkeyblocks.slice(0);
                this.hasDied = false;
            }
        }

        this.drawHud = function(){
            ctx.restore();
            ctx.font = "18px Arial";
            ctx.fillStyle = "white";
            var text = "Deaths: " + Maps.Player.deaths;
            ctx.fillText(text,10,15);
            ctx.restore();
        }
    },

    More: function(){
        this.buildMap = function(){
            ctx.restore();
        }

        this.update = function(deltaTime){
            ctx.font = "58px Arial";
            ctx.shadowColor = "green"
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.shadowBlur = 10;
            ctx.fillText("More maps soon!",90,140);
        }
    }
}