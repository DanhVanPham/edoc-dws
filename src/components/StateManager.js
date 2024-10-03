import { isEmpty, has } from 'lodash';
import PropTypes from 'prop-types';

export function specifyState({ data, isLoading = false, isFetching = false,
    isSuccess = false, isError = false, customCondLoading, ...props }) {
    if (customCondLoading?.() || isLoading || isFetching) return "loading";
    if (isError) return "error"
    if (isSuccess && (has(data, 'items') ? isEmpty(data?.items) : isEmpty(data))) return "empty"
    if (isSuccess) return "success"
    return "idle"
}

StateManager.propTypes = {
    children: PropTypes.node,
    sx: PropTypes.object,
    state: PropTypes.oneOf(['default', "success", "idle", "loading", "empty", "error"]),
};

export default function StateManager({ idleState, emptyState, errorState, loadingState, successState, state = "success", successIsIdle = true, ...props }) {
    if (state === "error") return errorState;
    if (state === "loading") return loadingState;
    if (state === "empty") return emptyState;
    if (!successIsIdle && state === "success") return successState;
    if (state === "idle") return idleState ?? props?.children;
    if (state === "success") return props?.children;
    return <>
    </>
}

export function mergeStates(responses) {
    let hasLoading = false;
    let hasError = false;
    let allSuccess = true;
    let allEmpty = true;
    let allIdle = true;

    // eslint-disable-next-line no-restricted-syntax
    for (const response of responses) {
        const currentState = specifyState(response);
        if (currentState === 'loading') {
            hasLoading = true;
        }
        if (currentState === 'error') {
            hasError = true;
        }
        if (currentState !== 'success') {
            allSuccess = false;
        }
        if (currentState !== 'empty') {
            allEmpty = false;
        }
        if (currentState !== 'idle') {
            allIdle = false;
        }
    }

    if (hasLoading) {
        return 'loading';
    }
    if (hasError) {
        return 'error';
    }
    if (allSuccess) {
        return 'success';
    }
    if (allEmpty) {
        return 'empty';
    }
    if (allIdle) {
        return 'idle';
    }

    return 'idle'; // Default case if no other conditions are met
}