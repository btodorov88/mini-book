<template>
  <section class="section">
    <form>
      <div class="field">
        <label class="label">Заглавие</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Заглавие на рецептата"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Рецепта</label>
        <div class="control">
          <textarea class="textarea" placeholder="Детайли за рецептата"></textarea>
        </div>
      </div>

      <div class="field">
        <div class="file">
          <label class="file-label">
            <input class="file-input" type="file" name="resume" />
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label">Изберете снимка</span>
            </span>
          </label>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Запази</button>
        </div>
        <div class="control">
          <button class="button is-link is-light">Откажи</button>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>