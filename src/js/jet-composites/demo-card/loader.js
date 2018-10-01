define(['ojs/ojcore', 'text!./demo-card-view.html', './demo-card-viewModel', 'text!./component.json', 'css!./demo-card-styles', 'ojs/ojcomposite'],
        function(oj, view, viewModel, metadata) {
            oj.Composite.register('demo-card', {
                view: view,
                viewModel: viewModel,
                metadata: JSON.parse(metadata)
            });
        }
);