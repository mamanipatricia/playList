

exports.makeSlug = (value) => {
    const val = value.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-').replace(/^-/g, '').replace(/-$/g,'')
    return val;
}

// exports default { makeSlug};