#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkBlueGreenStack } from '../lib/cdk-blue-green-stack';

const app = new cdk.App();
new CdkBlueGreenStack(app, 'CdkBlueGreenStack');
