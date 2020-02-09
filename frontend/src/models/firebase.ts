//
// firebase.ts
// NS
//
// Created by Thomas Schönmann on 07.02.2020
// Copyright © 2020. All rights reserved.
//

import * as firebase from "firebase/app";
import "firebase/analytics";

import config from "../config.fire.json";

firebase.initializeApp(config);
