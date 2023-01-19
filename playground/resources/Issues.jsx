import { For } from 'solid-js'
export default function Issues(props) {
  return (
    <div class="overflow-hidden bg-white shadow sm:rounded-md">
      <ul role="list" class="divide-y divide-gray-200">
        <For each={props.issues}>
          {(issue) => (
            <li>
              <div class="px-4 py-4 sm:px-6">
                <div class="flex items-center justify-between">
                  <p class="truncate text-sm font-medium text-indigo-600">
                    {issue.title}
                  </p>
                  <div class="ml-2 flex flex-shrink-0">
                    <p class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                      {issue.user.login}
                    </p>
                  </div>
                </div>
                <div class="mt-2 sm:flex sm:justify-between">
                  <div class="sm:flex">
                    <p class="flex items-center text-sm text-gray-500">
                      {issue.repository.name}
                    </p>
                    <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                      {issue.description}
                    </p>
                  </div>
                  <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <p>
                      Created on{' '}
                      <time dateTime={issue.updated_at}>
                        {issue.updated_at}
                      </time>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          )}
        </For>
      </ul>
    </div>
  )
}
