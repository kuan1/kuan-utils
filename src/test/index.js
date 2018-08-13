const requireAll = (r) => r.keys().map(r)

requireAll(require.context('./', false, /[^index]\.js/))
