define(['ojs/ojcore', 'text!./ojc-card-view.html', './ojc-card-viewModel', 'text!./component.json', 'css!./ojc-card-styles', 'ojs/ojcomposite'],
        function(oj, view, viewModel, metadata) {
            oj.Composite.register('ojc-card', {
                view: view,
                viewModel: viewModel,
                metadata: JSON.parse(metadata)
            });
        }
);