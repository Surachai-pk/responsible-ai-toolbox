// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  describeDataBalance,
  modelAssessmentDatasets
} from "@responsible-ai/e2e";

const datasetShape =
  modelAssessmentDatasets.FridgeObjectDetectionModelDebugging;
describeDataBalance(datasetShape, "FridgeObjectDetectionModelDebugging");