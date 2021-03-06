import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sn-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  data : Array<any> = [];
  nameClicked : any;

  constructor() { }

  ngOnInit() {

    this.data = [{
      "id": 1,
      "value": "fOUMb"
    }, {
      "id": 2,
      "value": "gNU8y"
    }, {
      "id": 3,
      "value": "nQFh8"
    }, {
      "id": 4,
      "value": "jNHmh"
    }, {
      "id": 5,
      "value": "qHIPp"
    }, {
      "id": 6,
      "value": "fALXj"
    }, {
      "id": 7,
      "value": "yTRWy"
    }, {
      "id": 8,
      "value": "xRTHz"
    }, {
      "id": 9,
      "value": "qCEdi"
    }, {
      "id": 10,
      "value": "dONqg"
    }, {
      "id": 11,
      "value": "vKPAm"
    }, {
      "id": 12,
      "value": "nFG1g"
    }, {
      "id": 13,
      "value": "vIMCo"
    }, {
      "id": 14,
      "value": "lOO8s"
    }, {
      "id": 15,
      "value": "zWHje"
    }, {
      "id": 16,
      "value": "hBSdu"
    }, {
      "id": 17,
      "value": "nZHG2"
    }, {
      "id": 18,
      "value": "xIPM3"
    }, {
      "id": 19,
      "value": "kWDSo"
    }, {
      "id": 20,
      "value": "uGIdc"
    }, {
      "id": 21,
      "value": "eLClq"
    }, {
      "id": 22,
      "value": "rCRYk"
    }, {
      "id": 23,
      "value": "bQOEt"
    }, {
      "id": 24,
      "value": "xKLU4"
    }, {
      "id": 25,
      "value": "vMFQ7"
    }, {
      "id": 26,
      "value": "qBFfp"
    }, {
      "id": 27,
      "value": "nSF7o"
    }, {
      "id": 28,
      "value": "hPEOq"
    }, {
      "id": 29,
      "value": "nLX71"
    }, {
      "id": 30,
      "value": "cMClx"
    }, {
      "id": 31,
      "value": "sBOGp"
    }, {
      "id": 32,
      "value": "iDIgo"
    }, {
      "id": 33,
      "value": "tGNsm"
    }, {
      "id": 34,
      "value": "uXRju"
    }, {
      "id": 35,
      "value": "xMLA1"
    }, {
      "id": 36,
      "value": "sTJQs"
    }, {
      "id": 37,
      "value": "nFEsa"
    }, {
      "id": 38,
      "value": "sWQyd"
    }, {
      "id": 39,
      "value": "cCIbx"
    }, {
      "id": 40,
      "value": "fNTtd"
    }, {
      "id": 41,
      "value": "aPN6s"
    }, {
      "id": 42,
      "value": "mVCv4"
    }, {
      "id": 43,
      "value": "sEC7d"
    }, {
      "id": 44,
      "value": "rOACn"
    }, {
      "id": 45,
      "value": "nLQJf"
    }, {
      "id": 46,
      "value": "lJV15"
    }, {
      "id": 47,
      "value": "pJAof"
    }, {
      "id": 48,
      "value": "eBKrg"
    }, {
      "id": 49,
      "value": "aHGPg"
    }, {
      "id": 50,
      "value": "wRDWf"
    }, {
      "id": 51,
      "value": "eGRWb"
    }, {
      "id": 52,
      "value": "tDOyi"
    }, {
      "id": 53,
      "value": "fOLvm"
    }, {
      "id": 54,
      "value": "cFJ7t"
    }, {
      "id": 55,
      "value": "hDEwp"
    }, {
      "id": 56,
      "value": "jVIAy"
    }, {
      "id": 57,
      "value": "vSRkr"
    }, {
      "id": 58,
      "value": "vHHPi"
    }, {
      "id": 59,
      "value": "xOR8s"
    }, {
      "id": 60,
      "value": "vYHH7"
    }, {
      "id": 61,
      "value": "lMRH3"
    }, {
      "id": 62,
      "value": "iBAQd"
    }, {
      "id": 63,
      "value": "nFN4z"
    }, {
      "id": 64,
      "value": "nEJlw"
    }, {
      "id": 65,
      "value": "uBTip"
    }, {
      "id": 66,
      "value": "tMUL1"
    }, {
      "id": 67,
      "value": "kOZga"
    }, {
      "id": 68,
      "value": "nZGU0"
    }, {
      "id": 69,
      "value": "uPQti"
    }, {
      "id": 70,
      "value": "gQCti"
    }, {
      "id": 71,
      "value": "xGXYa"
    }, {
      "id": 72,
      "value": "kVEf5"
    }, {
      "id": 73,
      "value": "hSHhp"
    }, {
      "id": 74,
      "value": "nZIhn"
    }, {
      "id": 75,
      "value": "yXVRf"
    }, {
      "id": 76,
      "value": "nFMS2"
    }, {
      "id": 77,
      "value": "gPDd1"
    }, {
      "id": 78,
      "value": "dOYzm"
    }, {
      "id": 79,
      "value": "sQFb0"
    }, {
      "id": 80,
      "value": "bSTJb"
    }, {
      "id": 81,
      "value": "eJXo2"
    }, {
      "id": 82,
      "value": "sGQu9"
    }, {
      "id": 83,
      "value": "rBUv5"
    }, {
      "id": 84,
      "value": "rNRT2"
    }, {
      "id": 85,
      "value": "zGKPg"
    }, {
      "id": 86,
      "value": "tLRyq"
    }, {
      "id": 87,
      "value": "nTUD2"
    }, {
      "id": 88,
      "value": "uJCum"
    }, {
      "id": 89,
      "value": "yMZCk"
    }, {
      "id": 90,
      "value": "eSSIx"
    }, {
      "id": 91,
      "value": "qSQ3g"
    }, {
      "id": 92,
      "value": "qCPVf"
    }, {
      "id": 93,
      "value": "oYJAh"
    }, {
      "id": 94,
      "value": "wGXPc"
    }, {
      "id": 95,
      "value": "lNUCo"
    }, {
      "id": 96,
      "value": "nSGar"
    }, {
      "id": 97,
      "value": "qPMxg"
    }, {
      "id": 98,
      "value": "dQHGq"
    }, {
      "id": 99,
      "value": "jABpt"
    }, {
      "id": 100,
      "value": "eXXg0"
    }]
  }


  onNameClicked (name : any) : void {
    console.log(name);
    this.nameClicked = name;
  }

}
