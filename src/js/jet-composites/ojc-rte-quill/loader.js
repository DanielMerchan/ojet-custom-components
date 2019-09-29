/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./ojc-rte-quill-view.html', './ojc-rte-quill-viewModel', 'text!./component.json', 'css!./ojc-rte-quill-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('ojc-rte-quill', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);