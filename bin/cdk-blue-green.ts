#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { BlueGreenContainerDeploymentStack } from '../lib/cdk-blue-green-stack';

const app = new cdk.App();
new BlueGreenContainerDeploymentStack(app, 'CdkBlueGreenStack');
