/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define({
  "ojc-rte-quill": {
    "quillNotInitialized": "Quill JS Editor Component has failed to initialize in component: {id}",
    "@quillNotInitialized": { "description": "Default error message when QuillJS has not been initialized properly and added to the DOM" },
    "quillNotInitializedDetail": "Ensure the container of the editor is added to the DOM before loading the QUILL JS. Check the Component lifecycle",
    "initQuillOptions": "Quill JS Initialization Parameters + {options}",
    "@initQuillOptions": { "description": "Used for logging the Quill JS Initialization Parameters" },
    "toolbarOptionNotValid": "Quill JS Toolbar option not supported: {option}",
    "@toolbarOptionNotValid": { "description": "Used for logging the Quill JS Toolbar option is not found" },
    "quillMaximumLengthSummary": "Too many characters",
    "quillMaximumLengthDetail": "Maximum Length is {maxLength}"
  }
}
);