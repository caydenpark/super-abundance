// document.querySelector('button').addEventListener('click', (event) => {
//     event.preventDefault();
//     performCaculations();
// });

document.getElementById("clear").onclick = function() {clear()};

const data = {
    "data": [
      {
        "Year": 1800,
        "U.S. Blue-Collar": 0.04,
        "U.S. Unskilled": 0.04,
        "U.K. Wage": 0.0076,
        "U.S. Population": " 5,308,483 ",
        "World Population": " 985,340,629 "
      },
      {
        "Year": 1801,
        "U.S. Blue-Collar": 0.04,
        "U.S. Unskilled": 0.04,
        "U.K. Wage": 0.0076,
        "U.S. Population": " 5,501,623 ",
        "World Population": " 987,628,322 "
      },
      {
        "Year": 1802,
        "U.S. Blue-Collar": 0.04,
        "U.S. Unskilled": 0.05,
        "U.K. Wage": 0.0074,
        "U.S. Population": " 5,694,763 ",
        "World Population": " 991,098,738 "
      },
      {
        "Year": 1803,
        "U.S. Blue-Collar": 0.04,
        "U.S. Unskilled": 0.03,
        "U.K. Wage": 0.0076,
        "U.S. Population": " 5,887,902 ",
        "World Population": " 994,610,260 "
      },
      {
        "Year": 1804,
        "U.S. Blue-Collar": 0.05,
        "U.S. Unskilled": 0.04,
        "U.K. Wage": 0.0079,
        "U.S. Population": " 6,081,042 ",
        "World Population": " 998,163,240 "
      },
      {
        "Year": 1805,
        "U.S. Blue-Collar": 0.05,
        "U.S. Unskilled": 0.04,
        "U.K. Wage": 0.0085,
        "U.S. Population": " 6,274,182 ",
        "World Population": " 1,001,758,044 "
      },
      {
        "Year": 1806,
        "U.S. Blue-Collar": 0.05,
        "U.S. Unskilled": 0.05,
        "U.K. Wage": 0.0085,
        "U.S. Population": " 6,467,322 ",
        "World Population": " 1,005,395,067 "
      },
      {
        "Year": 1807,
        "U.S. Blue-Collar": 0.05,
        "U.S. Unskilled": 0.04,
        "U.K. Wage": 0.0086,
        "U.S. Population": " 6,660,462 ",
        "World Population": " 1,009,074,742 "
      },
      {
        "Year": 1808,
        "U.S. Blue-Collar": 0.05,
        "U.S. Unskilled": 0.04,
        "U.K. Wage": 0.0086,
        "U.S. Population": " 6,853,601 ",
        "World Population": " 1,012,797,513 "
      },
      {
        "Year": 1809,
        "U.S. Blue-Collar": 0.05,
        "U.S. Unskilled": 0.06,
        "U.K. Wage": 0.0088,
        "U.S. Population": " 7,046,741 ",
        "World Population": " 1,016,563,866 "
      },
      {
        "Year": 1810,
        "U.S. Blue-Collar": 0.05,
        "U.S. Unskilled": 0.05,
        "U.K. Wage": 0.009,
        "U.S. Population": " 7,239,881 ",
        "World Population": " 1,022,629,692 "
      },
      {
        "Year": 1811,
        "U.S. Blue-Collar": 0.05,
        "U.S. Unskilled": 0.06,
        "U.K. Wage": 0.009,
        "U.S. Population": " 7,479,738 ",
        "World Population": " 1,027,487,469 "
      },
      {
        "Year": 1812,
        "U.S. Blue-Collar": 0.05,
        "U.S. Unskilled": 0.06,
        "U.K. Wage": 0.0092,
        "U.S. Population": " 7,719,595 ",
        "World Population": " 1,033,636,618 "
      },
      {
        "Year": 1813,
        "U.S. Blue-Collar": 0.05,
        "U.S. Unskilled": 0.05,
        "U.K. Wage": 0.0092,
        "U.S. Population": " 7,959,453 ",
        "World Population": " 1,040,443,689 "
      },
      {
        "Year": 1814,
        "U.S. Blue-Collar": 0.05,
        "U.S. Unskilled": 0.06,
        "U.K. Wage": 0.0091,
        "U.S. Population": " 8,199,310 ",
        "World Population": " 1,047,427,292 "
      },
      {
        "Year": 1815,
        "U.S. Blue-Collar": 0.05,
        "U.S. Unskilled": 0.06,
        "U.K. Wage": 0.0087,
        "U.S. Population": " 8,439,167 ",
        "World Population": " 1,054,586,106 "
      },
      {
        "Year": 1816,
        "U.S. Blue-Collar": 0.05,
        "U.S. Unskilled": 0.07,
        "U.K. Wage": 0.0085,
        "U.S. Population": " 8,679,024 ",
        "World Population": " 1,061,924,513 "
      },
      {
        "Year": 1817,
        "U.S. Blue-Collar": 0.05,
        "U.S. Unskilled": 0.06,
        "U.K. Wage": 0.0084,
        "U.S. Population": " 8,918,881 ",
        "World Population": " 1,069,447,070 "
      },
      {
        "Year": 1818,
        "U.S. Blue-Collar": 0.05,
        "U.S. Unskilled": 0.04,
        "U.K. Wage": 0.0082,
        "U.S. Population": " 9,158,739 ",
        "World Population": " 1,077,158,552 "
      },
      {
        "Year": 1819,
        "U.S. Blue-Collar": 0.05,
        "U.S. Unskilled": 0.05,
        "U.K. Wage": 0.0082,
        "U.S. Population": " 9,398,596 ",
        "World Population": " 1,084,757,875 "
      },
      {
        "Year": 1820,
        "U.S. Blue-Collar": 0.04,
        "U.S. Unskilled": 0.04,
        "U.K. Wage": 0.0079,
        "U.S. Population": " 9,638,453 ",
        "World Population": " 1,093,424,863 "
      },
      {
        "Year": 1821,
        "U.S. Blue-Collar": 0.05,
        "U.S. Unskilled": 0.05,
        "U.K. Wage": 0.0075,
        "U.S. Population": " 9,961,210 ",
        "World Population": " 1,099,331,577 "
      },
      {
        "Year": 1822,
        "U.S. Blue-Collar": 0.05,
        "U.S. Unskilled": 0.04,
        "U.K. Wage": 0.0074,
        "U.S. Population": " 10,283,966 ",
        "World Population": " 1,106,263,783 "
      },
      {
        "Year": 1823,
        "U.S. Blue-Collar": 0.05,
        "U.S. Unskilled": 0.05,
        "U.K. Wage": 0.0073,
        "U.S. Population": " 10,606,723 ",
        "World Population": " 1,113,514,792 "
      },
      {
        "Year": 1824,
        "U.S. Blue-Collar": 0.05,
        "U.S. Unskilled": 0.05,
        "U.K. Wage": 0.0074,
        "U.S. Population": " 10,929,480 ",
        "World Population": " 1,120,876,169 "
      },
      {
        "Year": 1825,
        "U.S. Blue-Collar": 0.05,
        "U.S. Unskilled": 0.04,
        "U.K. Wage": 0.0075,
        "U.S. Population": " 11,252,237 ",
        "World Population": " 1,128,342,960 "
      },
      {
        "Year": 1826,
        "U.S. Blue-Collar": 0.05,
        "U.S. Unskilled": 0.04,
        "U.K. Wage": 0.0075,
        "U.S. Population": " 11,574,993 ",
        "World Population": " 1,135,961,188 "
      },
      {
        "Year": 1827,
        "U.S. Blue-Collar": 0.05,
        "U.S. Unskilled": 0.04,
        "U.K. Wage": 0.0073,
        "U.S. Population": " 11,897,750 ",
        "World Population": " 1,143,684,846 "
      },
      {
        "Year": 1828,
        "U.S. Blue-Collar": 0.05,
        "U.S. Unskilled": 0.04,
        "U.K. Wage": 0.0073,
        "U.S. Population": " 12,220,507 ",
        "World Population": " 1,151,515,422 "
      },
      {
        "Year": 1829,
        "U.S. Blue-Collar": 0.06,
        "U.S. Unskilled": 0.04,
        "U.K. Wage": 0.0073,
        "U.S. Population": " 12,543,263 ",
        "World Population": " 1,158,898,384 "
      },
      {
        "Year": 1830,
        "U.S. Blue-Collar": 0.06,
        "U.S. Unskilled": 0.04,
        "U.K. Wage": 0.0072,
        "U.S. Population": " 12,866,020 ",
        "World Population": " 1,166,619,223 "
      },
      {
        "Year": 1831,
        "U.S. Blue-Collar": 0.06,
        "U.S. Unskilled": 0.04,
        "U.K. Wage": 0.0073,
        "U.S. Population": " 13,286,363 ",
        "World Population": " 1,172,266,726 "
      },
      {
        "Year": 1832,
        "U.S. Blue-Collar": 0.05,
        "U.S. Unskilled": 0.04,
        "U.K. Wage": 0.0073,
        "U.S. Population": " 13,706,707 ",
        "World Population": " 1,178,216,298 "
      },
      {
        "Year": 1833,
        "U.S. Blue-Collar": 0.06,
        "U.S. Unskilled": 0.04,
        "U.K. Wage": 0.0073,
        "U.S. Population": " 14,127,050 ",
        "World Population": " 1,183,684,120 "
      },
      {
        "Year": 1834,
        "U.S. Blue-Collar": 0.05,
        "U.S. Unskilled": 0.05,
        "U.K. Wage": 0.0073,
        "U.S. Population": " 14,547,393 ",
        "World Population": " 1,189,202,983 "
      },
      {
        "Year": 1835,
        "U.S. Blue-Collar": 0.05,
        "U.S. Unskilled": 0.05,
        "U.K. Wage": 0.0073,
        "U.S. Population": " 14,967,737 ",
        "World Population": " 1,194,812,021 "
      },
      {
        "Year": 1836,
        "U.S. Blue-Collar": 0.05,
        "U.S. Unskilled": 0.05,
        "U.K. Wage": 0.0075,
        "U.S. Population": " 15,388,080 ",
        "World Population": " 1,200,422,586 "
      },
      {
        "Year": 1837,
        "U.S. Blue-Collar": 0.06,
        "U.S. Unskilled": 0.06,
        "U.K. Wage": 0.0076,
        "U.S. Population": " 15,808,423 ",
        "World Population": " 1,206,132,721 "
      },
      {
        "Year": 1838,
        "U.S. Blue-Collar": 0.06,
        "U.S. Unskilled": 0.05,
        "U.K. Wage": 0.0078,
        "U.S. Population": " 16,228,766 ",
        "World Population": " 1,211,908,617 "
      },
      {
        "Year": 1839,
        "U.S. Blue-Collar": 0.06,
        "U.S. Unskilled": 0.05,
        "U.K. Wage": 0.0079,
        "U.S. Population": " 16,649,110 ",
        "World Population": " 1,217,625,799 "
      },
      {
        "Year": 1840,
        "U.S. Blue-Collar": 0.06,
        "U.S. Unskilled": 0.04,
        "U.K. Wage": 0.008,
        "U.S. Population": " 17,069,453 ",
        "World Population": " 1,224,117,982 "
      },
      {
        "Year": 1841,
        "U.S. Blue-Collar": 0.06,
        "U.S. Unskilled": 0.05,
        "U.K. Wage": 0.008,
        "U.S. Population": " 17,681,695 ",
        "World Population": " 1,228,828,189 "
      },
      {
        "Year": 1842,
        "U.S. Blue-Collar": 0.06,
        "U.S. Unskilled": 0.05,
        "U.K. Wage": 0.0079,
        "U.S. Population": " 18,293,938 ",
        "World Population": " 1,234,333,753 "
      },
      {
        "Year": 1843,
        "U.S. Blue-Collar": 0.06,
        "U.S. Unskilled": 0.05,
        "U.K. Wage": 0.0078,
        "U.S. Population": " 18,906,180 ",
        "World Population": " 1,239,880,237 "
      },
      {
        "Year": 1844,
        "U.S. Blue-Collar": 0.06,
        "U.S. Unskilled": 0.05,
        "U.K. Wage": 0.0079,
        "U.S. Population": " 19,518,422 ",
        "World Population": " 1,245,319,917 "
      },
      {
        "Year": 1845,
        "U.S. Blue-Collar": 0.06,
        "U.S. Unskilled": 0.05,
        "U.K. Wage": 0.008,
        "U.S. Population": " 20,130,665 ",
        "World Population": " 1,250,936,428 "
      },
      {
        "Year": 1846,
        "U.S. Blue-Collar": 0.06,
        "U.S. Unskilled": 0.05,
        "U.K. Wage": 0.0083,
        "U.S. Population": " 20,742,907 ",
        "World Population": " 1,256,637,463 "
      },
      {
        "Year": 1847,
        "U.S. Blue-Collar": 0.06,
        "U.S. Unskilled": 0.04,
        "U.K. Wage": 0.0086,
        "U.S. Population": " 21,355,149 ",
        "World Population": " 1,262,424,720 "
      },
      {
        "Year": 1848,
        "U.S. Blue-Collar": 0.07,
        "U.S. Unskilled": 0.05,
        "U.K. Wage": 0.0082,
        "U.S. Population": " 21,967,391 ",
        "World Population": " 1,268,300,005 "
      },
      {
        "Year": 1849,
        "U.S. Blue-Collar": 0.06,
        "U.S. Unskilled": 0.05,
        "U.K. Wage": 0.0081,
        "U.S. Population": " 22,579,634 ",
        "World Population": " 1,273,394,934 "
      },
      {
        "Year": 1850,
        "U.S. Blue-Collar": 0.06,
        "U.S. Unskilled": 0.05,
        "U.K. Wage": 0.0081,
        "U.S. Population": " 23,191,876 ",
        "World Population": " 1,278,810,377 "
      },
      {
        "Year": 1851,
        "U.S. Blue-Collar": 0.06,
        "U.S. Unskilled": 0.05,
        "U.K. Wage": 0.0081,
        "U.S. Population": " 24,017,021 ",
        "World Population": " 1,280,744,899 "
      },
      {
        "Year": 1852,
        "U.S. Blue-Collar": 0.07,
        "U.S. Unskilled": 0.05,
        "U.K. Wage": 0.0082,
        "U.S. Population": " 24,842,165 ",
        "World Population": " 1,282,983,708 "
      },
      {
        "Year": 1853,
        "U.S. Blue-Collar": 0.07,
        "U.S. Unskilled": 0.05,
        "U.K. Wage": 0.0087,
        "U.S. Population": " 25,667,310 ",
        "World Population": " 1,284,472,373 "
      },
      {
        "Year": 1854,
        "U.S. Blue-Collar": 0.07,
        "U.S. Unskilled": 0.06,
        "U.K. Wage": 0.0093,
        "U.S. Population": " 26,492,454 ",
        "World Population": " 1,286,078,878 "
      },
      {
        "Year": 1855,
        "U.S. Blue-Collar": 0.07,
        "U.S. Unskilled": 0.06,
        "U.K. Wage": 0.0095,
        "U.S. Population": " 27,317,599 ",
        "World Population": " 1,287,785,678 "
      },
      {
        "Year": 1856,
        "U.S. Blue-Collar": 0.07,
        "U.S. Unskilled": 0.06,
        "U.K. Wage": 0.0097,
        "U.S. Population": " 28,142,743 ",
        "World Population": " 1,289,613,085 "
      },
      {
        "Year": 1857,
        "U.S. Blue-Collar": 0.07,
        "U.S. Unskilled": 0.06,
        "U.K. Wage": 0.0096,
        "U.S. Population": " 28,967,888 ",
        "World Population": " 1,291,556,308 "
      },
      {
        "Year": 1858,
        "U.S. Blue-Collar": 0.08,
        "U.S. Unskilled": 0.06,
        "U.K. Wage": 0.0093,
        "U.S. Population": " 29,793,032 ",
        "World Population": " 1,293,616,943 "
      },
      {
        "Year": 1859,
        "U.S. Blue-Collar": 0.08,
        "U.S. Unskilled": 0.06,
        "U.K. Wage": 0.0094,
        "U.S. Population": " 30,618,177 ",
        "World Population": " 1,296,053,087 "
      },
      {
        "Year": 1860,
        "U.S. Blue-Collar": 0.08,
        "U.S. Unskilled": 0.06,
        "U.K. Wage": 0.0097,
        "U.S. Population": " 31,443,321 ",
        "World Population": " 1,300,098,076 "
      },
      {
        "Year": 1861,
        "U.S. Blue-Collar": 0.08,
        "U.S. Unskilled": 0.06,
        "U.K. Wage": 0.0099,
        "U.S. Population": " 32,154,826 ",
        "World Population": " 1,302,046,862 "
      },
      {
        "Year": 1862,
        "U.S. Blue-Collar": 0.09,
        "U.S. Unskilled": 0.06,
        "U.K. Wage": 0.01,
        "U.S. Population": " 32,866,331 ",
        "World Population": " 1,305,560,612 "
      },
      {
        "Year": 1863,
        "U.S. Blue-Collar": 0.1,
        "U.S. Unskilled": 0.07,
        "U.K. Wage": 0.01,
        "U.S. Population": " 33,577,836 ",
        "World Population": " 1,309,444,051 "
      },
      {
        "Year": 1864,
        "U.S. Blue-Collar": 0.11,
        "U.S. Unskilled": 0.08,
        "U.K. Wage": 0.0101,
        "U.S. Population": " 34,289,341 ",
        "World Population": " 1,313,410,603 "
      },
      {
        "Year": 1865,
        "U.S. Blue-Collar": 0.11,
        "U.S. Unskilled": 0.09,
        "U.K. Wage": 0.0104,
        "U.S. Population": " 35,000,846 ",
        "World Population": " 1,317,453,657 "
      },
      {
        "Year": 1866,
        "U.S. Blue-Collar": 0.11,
        "U.S. Unskilled": 0.09,
        "U.K. Wage": 0.0109,
        "U.S. Population": " 35,712,351 ",
        "World Population": " 1,321,572,626 "
      },
      {
        "Year": 1867,
        "U.S. Blue-Collar": 0.11,
        "U.S. Unskilled": 0.09,
        "U.K. Wage": 0.011,
        "U.S. Population": " 36,423,856 ",
        "World Population": " 1,325,775,239 "
      },
      {
        "Year": 1868,
        "U.S. Blue-Collar": 0.11,
        "U.S. Unskilled": 0.09,
        "U.K. Wage": 0.011,
        "U.S. Population": " 37,135,361 ",
        "World Population": " 1,330,060,419 "
      },
      {
        "Year": 1869,
        "U.S. Blue-Collar": 0.11,
        "U.S. Unskilled": 0.09,
        "U.K. Wage": 0.0109,
        "U.S. Population": " 37,846,866 ",
        "World Population": " 1,334,928,493 "
      },
      {
        "Year": 1870,
        "U.S. Blue-Collar": 0.11,
        "U.S. Unskilled": 0.09,
        "U.K. Wage": 0.0111,
        "U.S. Population": " 38,558,371 ",
        "World Population": " 1,341,697,614 "
      },
      {
        "Year": 1871,
        "U.S. Blue-Collar": 0.12,
        "U.S. Unskilled": 0.09,
        "U.K. Wage": 0.0115,
        "U.S. Population": " 39,721,455 ",
        "World Population": " 1,346,406,314 "
      },
      {
        "Year": 1872,
        "U.S. Blue-Collar": 0.12,
        "U.S. Unskilled": 0.09,
        "U.K. Wage": 0.0124,
        "U.S. Population": " 40,884,539 ",
        "World Population": " 1,353,032,986 "
      },
      {
        "Year": 1873,
        "U.S. Blue-Collar": 0.12,
        "U.S. Unskilled": 0.08,
        "U.K. Wage": 0.0133,
        "U.S. Population": " 42,047,622 ",
        "World Population": " 1,360,261,504 "
      },
      {
        "Year": 1874,
        "U.S. Blue-Collar": 0.12,
        "U.S. Unskilled": 0.08,
        "U.K. Wage": 0.0134,
        "U.S. Population": " 43,210,706 ",
        "World Population": " 1,367,561,973 "
      },
      {
        "Year": 1875,
        "U.S. Blue-Collar": 0.12,
        "U.S. Unskilled": 0.08,
        "U.K. Wage": 0.0134,
        "U.S. Population": " 44,373,790 ",
        "World Population": " 1,374,962,430 "
      },
      {
        "Year": 1876,
        "U.S. Blue-Collar": 0.11,
        "U.S. Unskilled": 0.07,
        "U.K. Wage": 0.0134,
        "U.S. Population": " 45,536,874 ",
        "World Population": " 1,382,443,050 "
      },
      {
        "Year": 1877,
        "U.S. Blue-Collar": 0.11,
        "U.S. Unskilled": 0.07,
        "U.K. Wage": 0.0135,
        "U.S. Population": " 46,699,958 ",
        "World Population": " 1,389,974,777 "
      },
      {
        "Year": 1878,
        "U.S. Blue-Collar": 0.11,
        "U.S. Unskilled": 0.07,
        "U.K. Wage": 0.0133,
        "U.S. Population": " 47,863,041 ",
        "World Population": " 1,397,574,403 "
      },
      {
        "Year": 1879,
        "U.S. Blue-Collar": 0.11,
        "U.S. Unskilled": 0.07,
        "U.K. Wage": 0.013,
        "U.S. Population": " 49,026,125 ",
        "World Population": " 1,405,702,618 "
      },
      {
        "Year": 1880,
        "U.S. Blue-Collar": 0.11,
        "U.S. Unskilled": 0.07,
        "U.K. Wage": 0.013,
        "U.S. Population": " 50,189,209 ",
        "World Population": " 1,415,841,209 "
      },
      {
        "Year": 1881,
        "U.S. Blue-Collar": 0.11,
        "U.S. Unskilled": 0.07,
        "U.K. Wage": 0.0131,
        "U.S. Population": " 51,468,265 ",
        "World Population": " 1,423,704,727 "
      },
      {
        "Year": 1882,
        "U.S. Blue-Collar": 0.11,
        "U.S. Unskilled": 0.08,
        "U.K. Wage": 0.0133,
        "U.S. Population": " 52,747,320 ",
        "World Population": " 1,433,553,127 "
      },
      {
        "Year": 1883,
        "U.S. Blue-Collar": 0.11,
        "U.S. Unskilled": 0.08,
        "U.K. Wage": 0.0133,
        "U.S. Population": " 54,026,376 ",
        "World Population": " 1,444,009,167 "
      },
      {
        "Year": 1884,
        "U.S. Blue-Collar": 0.12,
        "U.S. Unskilled": 0.08,
        "U.K. Wage": 0.0133,
        "U.S. Population": " 55,305,432 ",
        "World Population": " 1,454,595,037 "
      },
      {
        "Year": 1885,
        "U.S. Blue-Collar": 0.12,
        "U.S. Unskilled": 0.08,
        "U.K. Wage": 0.0131,
        "U.S. Population": " 56,584,488 ",
        "World Population": " 1,465,369,425 "
      },
      {
        "Year": 1886,
        "U.S. Blue-Collar": 0.12,
        "U.S. Unskilled": 0.08,
        "U.K. Wage": 0.013,
        "U.S. Population": " 57,863,543 ",
        "World Population": " 1,476,245,076 "
      },
      {
        "Year": 1887,
        "U.S. Blue-Collar": 0.13,
        "U.S. Unskilled": 0.08,
        "U.K. Wage": 0.0131,
        "U.S. Population": " 59,142,599 ",
        "World Population": " 1,487,277,339 "
      },
      {
        "Year": 1888,
        "U.S. Blue-Collar": 0.13,
        "U.S. Unskilled": 0.08,
        "U.K. Wage": 0.0132,
        "U.S. Population": " 60,421,655 ",
        "World Population": " 1,498,437,207 "
      },
      {
        "Year": 1889,
        "U.S. Blue-Collar": 0.13,
        "U.S. Unskilled": 0.08,
        "U.K. Wage": 0.0135,
        "U.S. Population": " 61,700,710 ",
        "World Population": " 1,509,373,834 "
      },
      {
        "Year": 1890,
        "U.S. Blue-Collar": 0.13,
        "U.S. Unskilled": 0.08,
        "U.K. Wage": 0.014,
        "U.S. Population": " 62,979,766 ",
        "World Population": " 1,521,669,265 "
      },
      {
        "Year": 1891,
        "U.S. Blue-Collar": 0.13,
        "U.S. Unskilled": 0.08,
        "U.K. Wage": 0.0143,
        "U.S. Population": " 64,303,006 ",
        "World Population": " 1,530,611,585 "
      },
      {
        "Year": 1892,
        "U.S. Blue-Collar": 0.13,
        "U.S. Unskilled": 0.08,
        "U.K. Wage": 0.0143,
        "U.S. Population": " 65,626,246 ",
        "World Population": " 1,540,822,549 "
      },
      {
        "Year": 1893,
        "U.S. Blue-Collar": 0.14,
        "U.S. Unskilled": 0.08,
        "U.K. Wage": 0.0144,
        "U.S. Population": " 66,949,487 ",
        "World Population": " 1,550,822,689 "
      },
      {
        "Year": 1894,
        "U.S. Blue-Collar": 0.13,
        "U.S. Unskilled": 0.08,
        "U.K. Wage": 0.0144,
        "U.S. Population": " 68,272,727 ",
        "World Population": " 1,560,960,959 "
      },
      {
        "Year": 1895,
        "U.S. Blue-Collar": 0.13,
        "U.S. Unskilled": 0.08,
        "U.K. Wage": 0.0144,
        "U.S. Population": " 69,595,967 ",
        "World Population": " 1,571,250,732 "
      },
      {
        "Year": 1896,
        "U.S. Blue-Collar": 0.13,
        "U.S. Unskilled": 0.08,
        "U.K. Wage": 0.0146,
        "U.S. Population": " 70,919,207 ",
        "World Population": " 1,581,628,826 "
      },
      {
        "Year": 1897,
        "U.S. Blue-Collar": 0.13,
        "U.S. Unskilled": 0.08,
        "U.K. Wage": 0.0149,
        "U.S. Population": " 72,242,447 ",
        "World Population": " 1,592,152,786 "
      },
      {
        "Year": 1898,
        "U.S. Blue-Collar": 0.13,
        "U.S. Unskilled": 0.08,
        "U.K. Wage": 0.0153,
        "U.S. Population": " 73,565,688 ",
        "World Population": " 1,602,801,870 "
      },
      {
        "Year": 1899,
        "U.S. Blue-Collar": 0.13,
        "U.S. Unskilled": 0.08,
        "U.K. Wage": 0.0154,
        "U.S. Population": " 74,888,928 ",
        "World Population": " 1,614,109,121 "
      },
      {
        "Year": 1900,
        "U.S. Blue-Collar": 0.14,
        "U.S. Unskilled": 0.09,
        "U.K. Wage": 0.016,
        "U.S. Population": " 76,212,168 ",
        "World Population": " 1,627,883,132 "
      },
      {
        "Year": 1901,
        "U.S. Blue-Collar": 0.14,
        "U.S. Unskilled": 0.09,
        "U.K. Wage": 0.0161,
        "U.S. Population": " 77,813,801 ",
        "World Population": " 1,638,647,517 "
      },
      {
        "Year": 1902,
        "U.S. Blue-Collar": 0.15,
        "U.S. Unskilled": 0.09,
        "U.K. Wage": 0.0162,
        "U.S. Population": " 79,415,434 ",
        "World Population": " 1,651,840,077 "
      },
      {
        "Year": 1903,
        "U.S. Blue-Collar": 0.15,
        "U.S. Unskilled": 0.09,
        "U.K. Wage": 0.0162,
        "U.S. Population": " 81,017,066 ",
        "World Population": " 1,665,703,540 "
      },
      {
        "Year": 1904,
        "U.S. Blue-Collar": 0.15,
        "U.S. Unskilled": 0.09,
        "U.K. Wage": 0.0162,
        "U.S. Population": " 82,618,699 ",
        "World Population": " 1,679,752,718 "
      },
      {
        "Year": 1905,
        "U.S. Blue-Collar": 0.16,
        "U.S. Unskilled": 0.1,
        "U.K. Wage": 0.0163,
        "U.S. Population": " 84,220,332 ",
        "World Population": " 1,693,984,163 "
      },
      {
        "Year": 1906,
        "U.S. Blue-Collar": 0.16,
        "U.S. Unskilled": 0.1,
        "U.K. Wage": 0.0165,
        "U.S. Population": " 85,821,965 ",
        "World Population": " 1,708,411,294 "
      },
      {
        "Year": 1907,
        "U.S. Blue-Collar": 0.17,
        "U.S. Unskilled": 0.11,
        "U.K. Wage": 0.0169,
        "U.S. Population": " 87,423,598 ",
        "World Population": " 1,723,032,738 "
      },
      {
        "Year": 1908,
        "U.S. Blue-Collar": 0.16,
        "U.S. Unskilled": 0.1,
        "U.K. Wage": 0.017,
        "U.S. Population": " 89,025,230 ",
        "World Population": " 1,737,874,788 "
      },
      {
        "Year": 1909,
        "U.S. Blue-Collar": 0.17,
        "U.S. Unskilled": 0.1,
        "U.K. Wage": 0.0171,
        "U.S. Population": " 90,626,863 ",
        "World Population": " 1,752,122,665 "
      },
      {
        "Year": 1910,
        "U.S. Blue-Collar": 0.18,
        "U.S. Unskilled": 0.11,
        "U.K. Wage": 0.0172,
        "U.S. Population": " 92,228,496 ",
        "World Population": " 1,767,847,653 "
      },
      {
        "Year": 1911,
        "U.S. Blue-Collar": 0.18,
        "U.S. Unskilled": 0.1,
        "U.K. Wage": 0.0175,
        "U.S. Population": " 93,607,800 ",
        "World Population": " 1,778,784,032 "
      },
      {
        "Year": 1912,
        "U.S. Blue-Collar": 0.19,
        "U.S. Unskilled": 0.1,
        "U.K. Wage": 0.018,
        "U.S. Population": " 94,987,104 ",
        "World Population": " 1,791,197,929 "
      },
      {
        "Year": 1913,
        "U.S. Blue-Collar": 0.2,
        "U.S. Unskilled": 0.11,
        "U.K. Wage": 0.0186,
        "U.S. Population": " 96,366,408 ",
        "World Population": " 1,803,056,235 "
      },
      {
        "Year": 1914,
        "U.S. Blue-Collar": 0.2,
        "U.S. Unskilled": 0.11,
        "U.K. Wage": 0.0188,
        "U.S. Population": " 97,745,712 ",
        "World Population": " 1,815,104,863 "
      },
      {
        "Year": 1915,
        "U.S. Blue-Collar": 0.2,
        "U.S. Unskilled": 0.11,
        "U.K. Wage": 0.0218,
        "U.S. Population": " 99,125,017 ",
        "World Population": " 1,827,290,389 "
      },
      {
        "Year": 1916,
        "U.S. Blue-Collar": 0.24,
        "U.S. Unskilled": 0.14,
        "U.K. Wage": 0.0248,
        "U.S. Population": " 100,504,321 ",
        "World Population": " 1,839,559,287 "
      },
      {
        "Year": 1917,
        "U.S. Blue-Collar": 0.29,
        "U.S. Unskilled": 0.17,
        "U.K. Wage": 0.0317,
        "U.S. Population": " 101,883,625 ",
        "World Population": " 1,851,899,055 "
      },
      {
        "Year": 1918,
        "U.S. Blue-Collar": 0.36,
        "U.S. Unskilled": 0.21,
        "U.K. Wage": 0.0394,
        "U.S. Population": " 103,262,929 ",
        "World Population": " 1,864,869,126 "
      },
      {
        "Year": 1919,
        "U.S. Blue-Collar": 0.43,
        "U.S. Unskilled": 0.25,
        "U.K. Wage": 0.0497,
        "U.S. Population": " 104,642,233 ",
        "World Population": " 1,878,650,358 "
      },
      {
        "Year": 1920,
        "U.S. Blue-Collar": 0.54,
        "U.S. Unskilled": 0.29,
        "U.K. Wage": 0.0597,
        "U.S. Population": " 106,021,537 ",
        "World Population": " 1,895,682,150 "
      },
      {
        "Year": 1921,
        "U.S. Blue-Collar": 0.48,
        "U.S. Unskilled": 0.24,
        "U.K. Wage": 0.0583,
        "U.S. Population": " 107,739,646 ",
        "World Population": " 1,908,748,639 "
      },
      {
        "Year": 1922,
        "U.S. Blue-Collar": 0.44,
        "U.S. Unskilled": 0.22,
        "U.K. Wage": 0.0464,
        "U.S. Population": " 109,457,754 ",
        "World Population": " 1,924,826,120 "
      },
      {
        "Year": 1923,
        "U.S. Blue-Collar": 0.48,
        "U.S. Unskilled": 0.24,
        "U.K. Wage": 0.0433,
        "U.S. Population": " 111,175,863 ",
        "World Population": " 1,941,636,900 "
      },
      {
        "Year": 1924,
        "U.S. Blue-Collar": 0.51,
        "U.S. Unskilled": 0.25,
        "U.K. Wage": 0.0446,
        "U.S. Population": " 112,893,972 ",
        "World Population": " 1,958,716,901 "
      },
      {
        "Year": 1925,
        "U.S. Blue-Collar": 0.5,
        "U.S. Unskilled": 0.25,
        "U.K. Wage": 0.0446,
        "U.S. Population": " 114,612,081 ",
        "World Population": " 1,976,068,839 "
      },
      {
        "Year": 1926,
        "U.S. Blue-Collar": 0.51,
        "U.S. Unskilled": 0.25,
        "U.K. Wage": 0.0439,
        "U.S. Population": " 116,330,189 ",
        "World Population": " 1,993,719,848 "
      },
      {
        "Year": 1927,
        "U.S. Blue-Collar": 0.52,
        "U.S. Unskilled": 0.26,
        "U.K. Wage": 0.0435,
        "U.S. Population": " 118,048,298 ",
        "World Population": " 2,011,689,749 "
      },
      {
        "Year": 1928,
        "U.S. Blue-Collar": 0.52,
        "U.S. Unskilled": 0.26,
        "U.K. Wage": 0.0429,
        "U.S. Population": " 119,766,407 ",
        "World Population": " 2,029,682,397 "
      },
      {
        "Year": 1929,
        "U.S. Blue-Collar": 0.52,
        "U.S. Unskilled": 0.26,
        "U.K. Wage": 0.0434,
        "U.S. Population": " 121,484,515 ",
        "World Population": " 2,048,513,689 "
      },
      {
        "Year": 1930,
        "U.S. Blue-Collar": 0.53,
        "U.S. Unskilled": 0.26,
        "U.K. Wage": 0.043,
        "U.S. Population": " 123,202,624 ",
        "World Population": " 2,070,596,353 "
      },
      {
        "Year": 1931,
        "U.S. Blue-Collar": 0.51,
        "U.S. Unskilled": 0.25,
        "U.K. Wage": 0.0422,
        "U.S. Population": " 124,098,819 ",
        "World Population": " 2,088,429,965 "
      },
      {
        "Year": 1932,
        "U.S. Blue-Collar": 0.45,
        "U.S. Unskilled": 0.22,
        "U.K. Wage": 0.0413,
        "U.S. Population": " 124,995,013 ",
        "World Population": " 2,109,357,892 "
      },
      {
        "Year": 1933,
        "U.S. Blue-Collar": 0.44,
        "U.S. Unskilled": 0.22,
        "U.K. Wage": 0.0411,
        "U.S. Population": " 125,891,208 ",
        "World Population": " 2,131,029,147 "
      },
      {
        "Year": 1934,
        "U.S. Blue-Collar": 0.53,
        "U.S. Unskilled": 0.26,
        "U.K. Wage": 0.0415,
        "U.S. Population": " 126,787,402 ",
        "World Population": " 2,152,969,392 "
      },
      {
        "Year": 1935,
        "U.S. Blue-Collar": 0.54,
        "U.S. Unskilled": 0.27,
        "U.K. Wage": 0.0419,
        "U.S. Population": " 127,683,597 ",
        "World Population": " 2,175,184,808 "
      },
      {
        "Year": 1936,
        "U.S. Blue-Collar": 0.55,
        "U.S. Unskilled": 0.27,
        "U.K. Wage": 0.0428,
        "U.S. Population": " 128,579,791 ",
        "World Population": " 2,197,830,032 "
      },
      {
        "Year": 1937,
        "U.S. Blue-Collar": 0.63,
        "U.S. Unskilled": 0.31,
        "U.K. Wage": 0.0437,
        "U.S. Population": " 129,475,986 ",
        "World Population": " 2,220,878,589 "
      },
      {
        "Year": 1938,
        "U.S. Blue-Collar": 0.64,
        "U.S. Unskilled": 0.32,
        "U.K. Wage": 0.0476,
        "U.S. Population": " 130,372,180 ",
        "World Population": " 2,244,005,191 "
      },
      {
        "Year": 1939,
        "U.S. Blue-Collar": 0.64,
        "U.S. Unskilled": 0.32,
        "U.K. Wage": 0.0471,
        "U.S. Population": " 131,268,375 ",
        "World Population": " 2,266,483,407 "
      },
      {
        "Year": 1940,
        "U.S. Blue-Collar": 0.67,
        "U.S. Unskilled": 0.33,
        "U.K. Wage": 0.0595,
        "U.S. Population": " 132,164,569 ",
        "World Population": " 2,290,871,362 "
      },
      {
        "Year": 1941,
        "U.S. Blue-Collar": 0.74,
        "U.S. Unskilled": 0.37,
        "U.K. Wage": 0.0652,
        "U.S. Population": " 134,080,692 ",
        "World Population": " 2,307,736,768 "
      },
      {
        "Year": 1942,
        "U.S. Blue-Collar": 0.86,
        "U.S. Unskilled": 0.42,
        "U.K. Wage": 0.0737,
        "U.S. Population": " 135,996,815 ",
        "World Population": " 2,326,734,579 "
      },
      {
        "Year": 1943,
        "U.S. Blue-Collar": 0.98,
        "U.S. Unskilled": 0.46,
        "U.K. Wage": 0.0814,
        "U.S. Population": " 137,912,938 ",
        "World Population": " 2,344,581,440 "
      },
      {
        "Year": 1944,
        "U.S. Blue-Collar": 1.05,
        "U.S. Unskilled": 0.48,
        "U.K. Wage": 0.0831,
        "U.S. Population": " 139,829,061 ",
        "World Population": " 2,362,439,908 "
      },
      {
        "Year": 1945,
        "U.S. Blue-Collar": 1.06,
        "U.S. Unskilled": 0.5,
        "U.K. Wage": 0.0858,
        "U.S. Population": " 141,745,184 ",
        "World Population": " 2,380,167,769 "
      },
      {
        "Year": 1946,
        "U.S. Blue-Collar": 1.13,
        "U.S. Unskilled": 0.55,
        "U.K. Wage": 0.0908,
        "U.S. Population": " 143,661,306 ",
        "World Population": " 2,397,811,266 "
      },
      {
        "Year": 1947,
        "U.S. Blue-Collar": 1.3,
        "U.S. Unskilled": 0.62,
        "U.K. Wage": 0.101,
        "U.S. Population": " 145,577,429 ",
        "World Population": " 2,416,694,412 "
      },
      {
        "Year": 1948,
        "U.S. Blue-Collar": 1.41,
        "U.S. Unskilled": 0.66,
        "U.K. Wage": 0.1111,
        "U.S. Population": " 147,493,552 ",
        "World Population": " 2,437,259,361 "
      },
      {
        "Year": 1949,
        "U.S. Blue-Collar": 1.46,
        "U.S. Unskilled": 0.69,
        "U.K. Wage": 0.1163,
        "U.S. Population": " 149,409,675 ",
        "World Population": " 2,463,242,071 "
      },
      {
        "Year": 1950,
        "U.S. Blue-Collar": 1.55,
        "U.S. Unskilled": 0.72,
        "U.K. Wage": 0.121,
        "U.S. Population": " 151,325,798 ",
        "World Population": " 2,499,322,112 "
      },
      {
        "Year": 1951,
        "U.S. Blue-Collar": 1.72,
        "U.S. Unskilled": 0.78,
        "U.K. Wage": 0.1324,
        "U.S. Population": " 154,125,536 ",
        "World Population": " 2,543,130,368 "
      },
      {
        "Year": 1952,
        "U.S. Blue-Collar": 1.83,
        "U.S. Unskilled": 0.83,
        "U.K. Wage": 0.1453,
        "U.S. Population": " 156,925,273 ",
        "World Population": " 2,590,270,976 "
      },
      {
        "Year": 1953,
        "U.S. Blue-Collar": 1.94,
        "U.S. Unskilled": 0.89,
        "U.K. Wage": 0.1538,
        "U.S. Population": " 159,725,011 ",
        "World Population": " 2,640,278,784 "
      },
      {
        "Year": 1954,
        "U.S. Blue-Collar": 1.97,
        "U.S. Unskilled": 0.93,
        "U.K. Wage": 0.1634,
        "U.S. Population": " 162,524,749 ",
        "World Population": " 2,691,979,264 "
      },
      {
        "Year": 1955,
        "U.S. Blue-Collar": 2.05,
        "U.S. Unskilled": 0.97,
        "U.K. Wage": 0.1775,
        "U.S. Population": " 165,324,487 ",
        "World Population": " 2,746,072,064 "
      },
      {
        "Year": 1956,
        "U.S. Blue-Collar": 2.16,
        "U.S. Unskilled": 1.02,
        "U.K. Wage": 0.1931,
        "U.S. Population": " 168,124,224 ",
        "World Population": " 2,801,002,752 "
      },
      {
        "Year": 1957,
        "U.S. Blue-Collar": 2.24,
        "U.S. Unskilled": 1.07,
        "U.K. Wage": 0.2057,
        "U.S. Population": " 170,923,962 ",
        "World Population": " 2,857,866,752 "
      },
      {
        "Year": 1958,
        "U.S. Blue-Collar": 2.39,
        "U.S. Unskilled": 1.12,
        "U.K. Wage": 0.2158,
        "U.S. Population": " 173,723,700 ",
        "World Population": " 2,916,108,032 "
      },
      {
        "Year": 1959,
        "U.S. Blue-Collar": 2.45,
        "U.S. Unskilled": 1.16,
        "U.K. Wage": 0.2207,
        "U.S. Population": " 176,523,437 ",
        "World Population": " 2,970,292,224 "
      },
      {
        "Year": 1960,
        "U.S. Blue-Collar": 2.54,
        "U.S. Unskilled": 1.21,
        "U.K. Wage": 0.2344,
        "U.S. Population": " 179,323,175 ",
        "World Population": " 3,019,233,536 "
      },
      {
        "Year": 1961,
        "U.S. Blue-Collar": 2.6,
        "U.S. Unskilled": 1.25,
        "U.K. Wage": 0.2553,
        "U.S. Population": " 181,712,050 ",
        "World Population": " 3,068,370,688 "
      },
      {
        "Year": 1962,
        "U.S. Blue-Collar": 2.71,
        "U.S. Unskilled": 1.29,
        "U.K. Wage": 0.2691,
        "U.S. Population": " 184,100,925 ",
        "World Population": " 3,126,686,720 "
      },
      {
        "Year": 1963,
        "U.S. Blue-Collar": 2.83,
        "U.S. Unskilled": 1.33,
        "U.K. Wage": 0.2817,
        "U.S. Population": " 186,489,800 ",
        "World Population": " 3,195,779,328 "
      },
      {
        "Year": 1964,
        "U.S. Blue-Collar": 2.89,
        "U.S. Unskilled": 1.37,
        "U.K. Wage": 0.3057,
        "U.S. Population": " 188,878,675 ",
        "World Population": " 3,267,212,288 "
      },
      {
        "Year": 1965,
        "U.S. Blue-Collar": 3,
        "U.S. Unskilled": 1.41,
        "U.K. Wage": 0.3301,
        "U.S. Population": " 191,267,551 ",
        "World Population": " 3,337,112,064 "
      },
      {
        "Year": 1966,
        "U.S. Blue-Collar": 3.14,
        "U.S. Unskilled": 1.47,
        "U.K. Wage": 0.3614,
        "U.S. Population": " 193,656,426 ",
        "World Population": " 3,406,416,896 "
      },
      {
        "Year": 1967,
        "U.S. Blue-Collar": 3.29,
        "U.S. Unskilled": 1.54,
        "U.K. Wage": 0.3774,
        "U.S. Population": " 196,045,301 ",
        "World Population": " 3,475,448,064 "
      },
      {
        "Year": 1968,
        "U.S. Blue-Collar": 3.52,
        "U.S. Unskilled": 1.62,
        "U.K. Wage": 0.4108,
        "U.S. Population": " 198,434,176 ",
        "World Population": " 3,546,810,880 "
      },
      {
        "Year": 1969,
        "U.S. Blue-Collar": 3.72,
        "U.S. Unskilled": 1.72,
        "U.K. Wage": 0.4447,
        "U.S. Population": " 200,823,051 ",
        "World Population": " 3,620,655,360 "
      },
      {
        "Year": 1970,
        "U.S. Blue-Collar": 3.93,
        "U.S. Unskilled": 1.85,
        "U.K. Wage": 0.5123,
        "U.S. Population": " 203,211,926 ",
        "World Population": " 3,695,390,208 "
      },
      {
        "Year": 1971,
        "U.S. Blue-Collar": 4.26,
        "U.S. Unskilled": 1.99,
        "U.K. Wage": 0.5865,
        "U.S. Population": " 205,545,314 ",
        "World Population": " 3,770,163,200 "
      },
      {
        "Year": 1972,
        "U.S. Blue-Collar": 4.59,
        "U.S. Unskilled": 2.14,
        "U.K. Wage": 0.653,
        "U.S. Population": " 207,878,702 ",
        "World Population": " 3,844,800,768 "
      },
      {
        "Year": 1973,
        "U.S. Blue-Collar": 4.95,
        "U.S. Unskilled": 2.28,
        "U.K. Wage": 0.744,
        "U.S. Population": " 210,212,090 ",
        "World Population": " 3,920,251,392 "
      },
      {
        "Year": 1974,
        "U.S. Blue-Collar": 5.44,
        "U.S. Unskilled": 2.45,
        "U.K. Wage": 0.892,
        "U.S. Population": " 212,545,478 ",
        "World Population": " 3,995,516,928 "
      },
      {
        "Year": 1975,
        "U.S. Blue-Collar": 6.02,
        "U.S. Unskilled": 2.66,
        "U.K. Wage": 1.1701,
        "U.S. Population": " 214,878,866 ",
        "World Population": " 4,069,437,184 "
      },
      {
        "Year": 1976,
        "U.S. Blue-Collar": 6.53,
        "U.S. Unskilled": 2.91,
        "U.K. Wage": 1.3684,
        "U.S. Population": " 217,212,253 ",
        "World Population": " 4,142,505,728 "
      },
      {
        "Year": 1977,
        "U.S. Blue-Collar": 7.15,
        "U.S. Unskilled": 3.15,
        "U.K. Wage": 1.4966,
        "U.S. Population": " 219,545,641 ",
        "World Population": " 4,215,772,416 "
      },
      {
        "Year": 1978,
        "U.S. Blue-Collar": 7.77,
        "U.S. Unskilled": 3.4,
        "U.K. Wage": 1.6941,
        "U.S. Population": " 221,879,029 ",
        "World Population": " 4,289,657,600 "
      },
      {
        "Year": 1979,
        "U.S. Blue-Collar": 8.34,
        "U.S. Unskilled": 3.69,
        "U.K. Wage": 1.9803,
        "U.S. Population": " 224,212,417 ",
        "World Population": " 4,365,582,848 "
      },
      {
        "Year": 1980,
        "U.S. Blue-Collar": 9.12,
        "U.S. Unskilled": 4.06,
        "U.K. Wage": 2.4462,
        "U.S. Population": " 226,545,805 ",
        "World Population": " 4,444,007,936 "
      },
      {
        "Year": 1981,
        "U.S. Blue-Collar": 10,
        "U.S. Unskilled": 4.4,
        "U.K. Wage": 2.841,
        "U.S. Population": " 228,762,212 ",
        "World Population": " 4,524,627,456 "
      },
      {
        "Year": 1982,
        "U.S. Blue-Collar": 10.8,
        "U.S. Unskilled": 4.63,
        "U.K. Wage": 3.123,
        "U.S. Population": " 230,978,619 ",
        "World Population": " 4,607,984,640 "
      },
      {
        "Year": 1983,
        "U.S. Blue-Collar": 11.22,
        "U.S. Unskilled": 4.83,
        "U.K. Wage": 3.4051,
        "U.S. Population": " 233,195,025 ",
        "World Population": " 4,691,884,032 "
      },
      {
        "Year": 1984,
        "U.S. Blue-Collar": 11.78,
        "U.S. Unskilled": 5.01,
        "U.K. Wage": 3.6047,
        "U.S. Population": " 235,411,432 ",
        "World Population": " 4,775,836,160 "
      },
      {
        "Year": 1985,
        "U.S. Blue-Collar": 12.5,
        "U.S. Unskilled": 5.18,
        "U.K. Wage": 3.9205,
        "U.S. Population": " 237,627,839 ",
        "World Population": " 4,861,730,816 "
      },
      {
        "Year": 1986,
        "U.S. Blue-Collar": 12.9,
        "U.S. Unskilled": 5.28,
        "U.K. Wage": 4.2452,
        "U.S. Population": " 239,844,246 ",
        "World Population": " 4,950,063,104 "
      },
      {
        "Year": 1987,
        "U.S. Blue-Collar": 13.05,
        "U.S. Unskilled": 5.4,
        "U.K. Wage": 4.5687,
        "U.S. Population": " 242,060,653 ",
        "World Population": " 5,040,984,576 "
      },
      {
        "Year": 1988,
        "U.S. Blue-Collar": 13.58,
        "U.S. Unskilled": 5.6,
        "U.K. Wage": 4.9685,
        "U.S. Population": " 244,277,059 ",
        "World Population": " 5,132,294,144 "
      },
      {
        "Year": 1989,
        "U.S. Blue-Collar": 14,
        "U.S. Unskilled": 5.79,
        "U.K. Wage": 5.4327,
        "U.S. Population": " 246,493,466 ",
        "World Population": " 5,223,704,064 "
      },
      {
        "Year": 1990,
        "U.S. Blue-Collar": 14.41,
        "U.S. Unskilled": 6.03,
        "U.K. Wage": 6.0497,
        "U.S. Population": " 248,709,873 ",
        "World Population": " 5,316,175,872 "
      },
      {
        "Year": 1991,
        "U.S. Blue-Collar": 14.93,
        "U.S. Unskilled": 6.26,
        "U.K. Wage": 6.6168,
        "U.S. Population": " 251,981,076 ",
        "World Population": " 5,406,245,888 "
      },
      {
        "Year": 1992,
        "U.S. Blue-Collar": 15.63,
        "U.S. Unskilled": 6.43,
        "U.K. Wage": 7.0388,
        "U.S. Population": " 255,252,280 ",
        "World Population": " 5,492,686,336 "
      },
      {
        "Year": 1993,
        "U.S. Blue-Collar": 16.12,
        "U.S. Unskilled": 6.6,
        "U.K. Wage": 7.2656,
        "U.S. Population": " 258,523,483 ",
        "World Population": " 5,577,433,600 "
      },
      {
        "Year": 1994,
        "U.S. Blue-Collar": 16.56,
        "U.S. Unskilled": 6.78,
        "U.K. Wage": 7.4946,
        "U.S. Population": " 261,794,686 ",
        "World Population": " 5,660,727,808 "
      },
      {
        "Year": 1995,
        "U.S. Blue-Collar": 16.66,
        "U.S. Unskilled": 6.99,
        "U.K. Wage": 7.73,
        "U.S. Population": " 265,065,890 ",
        "World Population": " 5,743,219,712 "
      },
      {
        "Year": 1996,
        "U.S. Blue-Collar": 16.84,
        "U.S. Unskilled": 7.23,
        "U.K. Wage": 8.013,
        "U.S. Population": " 268,337,093 ",
        "World Population": " 5,825,145,344 "
      },
      {
        "Year": 1997,
        "U.S. Blue-Collar": 18.12,
        "U.S. Unskilled": 7.49,
        "U.K. Wage": 8.371,
        "U.S. Population": " 271,608,296 ",
        "World Population": " 5,906,481,152 "
      },
      {
        "Year": 1998,
        "U.S. Blue-Collar": 18.18,
        "U.S. Unskilled": 7.75,
        "U.K. Wage": 8.8281,
        "U.S. Population": " 274,879,499 ",
        "World Population": " 5,987,312,640 "
      },
      {
        "Year": 1999,
        "U.S. Blue-Collar": 18.75,
        "U.S. Unskilled": 8,
        "U.K. Wage": 9.2775,
        "U.S. Population": " 278,150,703 ",
        "World Population": " 6,067,758,592 "
      },
      {
        "Year": 2000,
        "U.S. Blue-Collar": 19.36,
        "U.S. Unskilled": 8.3,
        "U.K. Wage": 9.6141,
        "U.S. Population": " 281,421,906 ",
        "World Population": " 6,148,898,816 "
      },
      {
        "Year": 2001,
        "U.S. Blue-Collar": 19.36,
        "U.S. Unskilled": 8.81,
        "U.K. Wage": 10.118,
        "U.S. Population": " 284,154,269 ",
        "World Population": " 6,230,747,136 "
      },
      {
        "Year": 2002,
        "U.S. Blue-Collar": 21.02,
        "U.S. Unskilled": 8.95,
        "U.K. Wage": 10.5327,
        "U.S. Population": " 286,886,632 ",
        "World Population": " 6,312,407,552 "
      },
      {
        "Year": 2003,
        "U.S. Blue-Collar": 21.54,
        "U.S. Unskilled": 9.25,
        "U.K. Wage": 10.9333,
        "U.S. Population": " 289,618,996 ",
        "World Population": " 6,393,898,496 "
      },
      {
        "Year": 2004,
        "U.S. Blue-Collar": 23.07,
        "U.S. Unskilled": 9.25,
        "U.K. Wage": 11.4189,
        "U.S. Population": " 292,351,359 ",
        "World Population": " 6,475,751,424 "
      },
      {
        "Year": 2005,
        "U.S. Blue-Collar": 23.92,
        "U.S. Unskilled": 9.44,
        "U.K. Wage": 11.9277,
        "U.S. Population": " 295,083,722 ",
        "World Population": " 6,558,176,256 "
      },
      {
        "Year": 2006,
        "U.S. Blue-Collar": 24.37,
        "U.S. Unskilled": 9.67,
        "U.K. Wage": 12.5313,
        "U.S. Population": " 297,816,085 ",
        "World Population": " 6,641,416,192 "
      },
      {
        "Year": 2007,
        "U.S. Blue-Collar": 25.07,
        "U.S. Unskilled": 9.87,
        "U.K. Wage": 13.1417,
        "U.S. Population": " 300,548,448 ",
        "World Population": " 6,725,948,416 "
      },
      {
        "Year": 2008,
        "U.S. Blue-Collar": 25.87,
        "U.S. Unskilled": 10.45,
        "U.K. Wage": 13.654,
        "U.S. Population": " 303,280,812 ",
        "World Population": " 6,811,597,312 "
      },
      {
        "Year": 2009,
        "U.S. Blue-Collar": 26.15,
        "U.S. Unskilled": 10.47,
        "U.K. Wage": 13.8067,
        "U.S. Population": " 306,013,175 ",
        "World Population": " 6,898,306,048 "
      },
      {
        "Year": 2010,
        "U.S. Blue-Collar": 26.44,
        "U.S. Unskilled": 10.24,
        "U.K. Wage": 14.0507,
        "U.S. Population": " 308,745,538 ",
        "World Population": " 6,985,603,072 "
      },
      {
        "Year": 2011,
        "U.S. Blue-Collar": 26.88,
        "U.S. Unskilled": 10.4,
        "U.K. Wage": 14.4152,
        "U.S. Population": " 311,015,912 ",
        "World Population": " 7,073,125,376 "
      },
      {
        "Year": 2012,
        "U.S. Blue-Collar": 27.15,
        "U.S. Unskilled": 10.87,
        "U.K. Wage": 14.4524,
        "U.S. Population": " 313,286,287 ",
        "World Population": " 7,161,697,792 "
      },
      {
        "Year": 2013,
        "U.S. Blue-Collar": 27.92,
        "U.S. Unskilled": 10.89,
        "U.K. Wage": 14.5461,
        "U.S. Population": " 315,556,661 ",
        "World Population": " 7,250,593,280 "
      },
      {
        "Year": 2014,
        "U.S. Blue-Collar": 29.4,
        "U.S. Unskilled": 11.26,
        "U.K. Wage": 14.6461,
        "U.S. Population": " 317,827,035 ",
        "World Population": " 7,339,013,632 "
      },
      {
        "Year": 2015,
        "U.S. Blue-Collar": 30.55,
        "U.S. Unskilled": 11.35,
        "U.K. Wage": 15.0168,
        "U.S. Population": " 320,097,410 ",
        "World Population": " 7,426,597,376 "
      },
      {
        "Year": 2016,
        "U.S. Blue-Collar": 31.95,
        "U.S. Unskilled": 11.63,
        "U.K. Wage": 15.3969,
        "U.S. Population": " 322,367,784 ",
        "World Population": " 7,513,474,048 "
      },
      {
        "Year": 2017,
        "U.S. Blue-Collar": 32.39,
        "U.S. Unskilled": 12,
        "U.K. Wage": 15.7341,
        "U.S. Population": " 324,638,158 ",
        "World Population": " 7,599,822,336 "
      },
      {
        "Year": 2018,
        "U.S. Blue-Collar": 32.06,
        "U.S. Unskilled": 12.78,
        "U.K. Wage": 16.257,
        "U.S. Population": " 326,908,532 ",
        "World Population": " 7,683,789,824 "
      },
      {
        "Year": 2019,
        "U.S. Blue-Collar": 32.36,
        "U.S. Unskilled": 13.66,
        "U.K. Wage": 16.772,
        "U.S. Population": " 329,178,907 ",
        "World Population": " 7,764,951,040 "
      },
      {
        "Year": 2020,
        "U.S. Blue-Collar": 32.54,
        "U.S. Unskilled": 14.35,
        "U.K. Wage": 18.8913,
        "U.S. Population": " 331,449,281 ",
        "World Population": " 7,840,952,832 "
      },
      {
        "Year": 2021,
        "U.S. Blue-Collar": 33.39,
        "U.S. Unskilled": 14.52,
        "U.K. Wage": 18.7268,
        "U.S. Population": " 333,719,655 ",
        "World Population": " 7,909,295,104 "
      },
      {
        "Year": 2022,
        "U.S. Blue-Collar": 34.76,
        "U.S. Unskilled": 15.72,
        "U.K. Wage": 19.326,
        "U.S. Population": " 335,990,030 ",
        "World Population": " 7,951,149,550 "
      }
    ]
  };

function getHourlyComp(){
    var selectElement = document.getElementById('dropDownWages');

    if (selectElement.value === "Custom Wage"){
        var startComp = document.getElementById("startComp").value;
        var endComp = document.getElementById("endComp").value;
    } else if (selectElement.value === "U.S. Blue Collar") {
        const yearDataStart = data.data.find(obj => obj.Year === 1802);
        const wageTypeStart = yearDataStart["U.S. Blue Collar"];
        const yearDataEnd = data.data.find(obj => obj.Year === endYear);
        const wageTypeEnd = yearDataEnd["U.S. Blue Collar"];
        startComp = wageTypeStart;
        endComp = wageTypeEnd;
    }

    document.getElementById("startComp").innerHTML = startComp.toFixed(2);
    document.getElementById("endComp").innerHTML = endComp.toFixed(2);

    document.getElementById("compChange").innerHTML = compChange.toFixed(2);
    document.getElementById("percentageCompChange").innerHTML = percentageCompChange.toFixed(1)+"%";
}

function performCalculations() {
    // Year
    var startYear = document.getElementById("startYear").value;
    var endYear = document.getElementById("endYear").value;
    var yearChange = endYear - startYear;
    
    document.getElementById("yearChange").innerHTML = yearChange;

    // Price
    var startPrice = document.getElementById("startPrice").value;
    var endPrice = document.getElementById("endPrice").value;
    var priceChange = endPrice - startPrice;
    var percentagePriceChange = priceChange / startPrice * 100;
    
    document.getElementById("priceChange").innerHTML = priceChange.toFixed(2);
    document.getElementById("percentageChange").innerHTML = percentagePriceChange.toFixed(1)+"%";
    
    // Hourly Compensation
    var startComp = document.getElementById("startComp").value;
    var endComp = document.getElementById("endComp").value;    
    var compChange = endComp - startComp;
    var percentageCompChange = compChange / startComp * 100;

    document.getElementById("compChange").innerHTML = compChange.toFixed(2);
    document.getElementById("percentageCompChange").innerHTML = percentageCompChange.toFixed(1)+"%";
    
    // Population
    var startPop = document.getElementById("startPop").value;
    var endPop = document.getElementById("endPop").value;
    var popChange = endPop - startPop;
    var percentagePopChange = popChange / startPop * 100;
    
    document.getElementById("popChange").innerHTML = popChange;
    document.getElementById("percentagePopChange").innerHTML = percentagePopChange.toFixed(1)+"%";
    
    // Time Price
    var startTimePrice = startPrice / startComp
    var endTimePrice = endPrice / endComp
    var timePriceChange = endTimePrice - startTimePrice
    var timePricePercentageChange = timePriceChange / startTimePrice * 100;
    
    document.getElementById("startTimePrice").innerHTML = startTimePrice.toFixed(2);
    document.getElementById("endTimePrice").innerHTML = endTimePrice.toFixed(3);
    document.getElementById("timePriceChange").innerHTML = timePriceChange.toFixed(3);
    document.getElementById("timePricePercentageChange").innerHTML = timePricePercentageChange.toFixed(1)+"%";
    
    // Personal-Level Multiplier
    personalMultiplierStart = 1;                            // Constant value of 1
    personalMultiplierEnd = startTimePrice / endTimePrice;
    personalMultiplierChange = personalMultiplierEnd - personalMultiplierStart;
    personalMultiplierPercentageChange = personalMultiplierChange / personalMultiplierStart * 100;
    
    document.getElementById("personalMultiplierStart").innerHTML = 1;
    document.getElementById("personalMultiplierEnd").innerHTML = personalMultiplierEnd.toFixed(3);
    document.getElementById("personalMultiplierChange").innerHTML = personalMultiplierChange.toFixed(3);
    document.getElementById("personalMultiplierPercentageChange").innerHTML = personalMultiplierPercentageChange.toFixed(1)+"%";
    
    // Population-Level Multiplier
    populationMultiplierStart = 1;
    populationMultiplierEnd = personalMultiplierEnd * (1 + percentagePopChange/100);
    populationMultiplierChange = populationMultiplierEnd - populationMultiplierStart;
    populationMultiplierPercentageChange = populationMultiplierChange / populationMultiplierStart * 100;
    
    document.getElementById("populationMultiplierStart").innerHTML = populationMultiplierStart;
    document.getElementById("populationMultiplierEnd").innerHTML = populationMultiplierEnd.toFixed(3);
    document.getElementById("populationMultiplierChange").innerHTML = populationMultiplierChange.toFixed(3);
    document.getElementById("populationMultiplierPercentageChange").innerHTML = populationMultiplierPercentageChange.toFixed(1)+"%"
    
    // Compound Annual Growth Rate
    // ((End Value / Start Value)^(1 / Number of Years) - 1) * 100
    var personalGrowthRate = ((personalMultiplierEnd/personalMultiplierStart)**(1/yearChange)-1) * 100;
    var populationGrowthRate = ((populationMultiplierEnd/populationMultiplierStart)**(1/yearChange)-1) * 100;
    
    document.getElementById("personalGrowthRate").innerHTML = personalGrowthRate.toFixed(2)+"%";
    document.getElementById("populationGrowthRate").innerHTML = populationGrowthRate.toFixed(2)+"%";
    
    // Years to Double
    var personalDoubleYears = 70/(personalGrowthRate.toFixed(2));
    var populationDoubleYears = 70/(populationGrowthRate.toFixed(2));
    
    document.getElementById("personalDoubleYears").innerHTML = personalDoubleYears.toFixed(2);
    document.getElementById("populationDoubleYears").innerHTML = populationDoubleYears.toFixed(2);
    
    // Elasticity of Population
    var personalElasticity = personalMultiplierPercentageChange/popChange/100;
    var populationElasticity = populationMultiplierPercentageChange/popChange/100;
    
    document.getElementById("personalElasticity").innerHTML = personalElasticity.toFixed(2);
    document.getElementById("populationElasticity").innerHTML = populationElasticity.toFixed(2);
}

function clear()
{
    document.getElementById("yearChange").innerHTML = "----";
    
    document.getElementById("priceChange").innerHTML = "----"
    document.getElementById("percentageChange").innerHTML = "----";
    
    document.getElementById("compChange").innerHTML = "----";
    document.getElementById("percentageCompChange").innerHTML = "----";
    
    document.getElementById("popChange").innerHTML = "----";
    document.getElementById("percentagePopChange").innerHTML = "----";
   
    document.getElementById("startTimePrice").innerHTML = "----";
    document.getElementById("endTimePrice").innerHTML = "----";
    document.getElementById("timePriceChange").innerHTML = "----";
    document.getElementById("timePricePercentageChange").innerHTML = "----";
    
    document.getElementById("personalMultiplierStart").innerHTML = "----";
    document.getElementById("personalMultiplierEnd").innerHTML = "----";
    document.getElementById("personalMultiplierChange").innerHTML = "----";
    document.getElementById("personalMultiplierPercentageChange").innerHTML = "----";

    // document.getElementById("populationMultiplierStart").innerHTML = "----";
    document.getElementById("populationMultiplierEnd").innerHTML = "----";
    document.getElementById("populationMultiplierChange").innerHTML = "----";
    document.getElementById("populationMultiplierPercentageChange").innerHTML = "----";

    document.getElementById("personalGrowthRate").innerHTML = "----";
    document.getElementById("populationGrowthRate").innerHTML = "----";

    document.getElementById("personalDoubleYears").innerHTML = "----";
    document.getElementById("populationDoubleYears").innerHTML = "----";

    document.getElementById("personalElasticity").innerHTML = "----";
    document.getElementById("populationElasticity").innerHTML = "----";
}
