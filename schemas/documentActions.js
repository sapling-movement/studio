import defaultResolve, { PublishAction } from 'part:@sanity/base/document-actions'
import SetSlugAndPublishAction from './actions/setSlugAndPublishAction.js'

/// Publish Actions
export default function useDocumentActions(props) {
  return defaultResolve(props).map((Action) =>
    Action === PublishAction ? SetSlugAndPublishAction : Action
  );
}
