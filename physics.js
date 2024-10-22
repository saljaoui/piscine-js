function getAcceleration(opj) {
    let a = 0;
    if (opj.f !== undefined && opj.m !== undefined && opj.m !== 0) {
        a = opj.f / opj.m;
    } else if (opj.Δv !== undefined && opj.Δt !== undefined && opj.Δt !== 0) {
        a = opj.Δv / opj.Δt;
    } else if (opj.d !== undefined && opj.t !== undefined && opj.t !== 0) {
        a = (opj.d * 2) / (opj.t ** 2);
    }
    if (a > 0) {
        return a;
    }
    return "impossible";
};